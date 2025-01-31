# Justfile

# Default release command
release:
    @echo "Building release version..."
    cargo build --release
    @just copy-binary

# Build for Intel Mac
release-intel:
    @echo "Building release version for Intel Mac..."
    cargo build --release --target x86_64-apple-darwin
    @just copy-binary-intel

# Copy binary command for native build
copy-binary:
    @if [ -f ./target/release/goosed ]; then \
        echo "Copying goosed binary to ui/desktop/src/bin with permissions preserved..."; \
        cp -p ./target/release/goosed ./ui/desktop/src/bin/; \
    else \
        echo "Release binary not found."; \
        exit 1; \
    fi

# Copy binary command for Intel build
copy-binary-intel:
    @if [ -f ./target/x86_64-apple-darwin/release/goosed ]; then \
        echo "Copying Intel goosed binary to ui/desktop/src/bin with permissions preserved..."; \
        cp -p ./target/x86_64-apple-darwin/release/goosed ./ui/desktop/src/bin/; \
    else \
        echo "Intel release binary not found."; \
        exit 1; \
    fi

# Run UI with latest
run-ui:
    @just release
    @echo "Running UI..."
    cd ui/desktop && npm install && npm run start-gui

# Run Docusaurus server for documentation
run-docs:
    @echo "Running docs server..."
    cd documentation && yarn && yarn start

# Run server
run-server:
    @echo "Running server..."
    cargo run -p goose-server

# make GUI with latest binary
make-ui:
    @just release
    cd ui/desktop && npm run bundle:default

# make GUI with latest binary
make-ui-intel:
    @just release-intel
    cd ui/desktop && npm run bundle:intel    

# Setup langfuse server
langfuse-server:
    #!/usr/bin/env bash
    ./scripts/setup_langfuse.sh