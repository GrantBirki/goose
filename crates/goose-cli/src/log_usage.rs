use goose::providers::base::Usage;

#[derive(Debug, serde::Serialize, serde::Deserialize)]
struct SessionLog {
    session_file: String,
    usage: goose::providers::base::Usage,
}

pub fn log_usage(session_file: String, usage: Usage) {
    let log = SessionLog {
        session_file,
        usage,
    };

    // Ensure log directory exists
    if let Some(home_dir) = dirs::home_dir() {
        let log_dir = home_dir.join(".config").join("goose").join("logs");
        if let Err(e) = std::fs::create_dir_all(&log_dir) {
            eprintln!("Failed to create log directory: {}", e);
            return;
        }

        let log_file = log_dir.join("goose.log");
        let serialized = match serde_json::to_string(&log) {
            Ok(s) => s,
            Err(e) => {
                eprintln!("Failed to serialize usage log: {}", e);
                return;
            }
        };

        // Append to log file
        if let Err(e) = std::fs::OpenOptions::new()
            .create(true)
            .append(true)
            .open(log_file)
            .and_then(|mut file| {
                std::io::Write::write_all(&mut file, serialized.as_bytes())?;
                std::io::Write::write_all(&mut file, b"\n")?;
                Ok(())
            })
        {
            eprintln!("Failed to write to usage log file: {}", e);
        }
    } else {
        eprintln!("Failed to write to usage log file: Failed to determine home directory");
    }
}

#[cfg(test)]
mod tests {
    use goose::providers::base::Usage;

    use crate::{
        log_usage::{log_usage, SessionLog},
        test_helpers::run_with_tmp_dir,
    };
    #[test]
    fn test_session_logging() {
        run_with_tmp_dir(|| {
            let home_dir = dirs::home_dir().unwrap();
            let log_dir = home_dir.join(".config").join("goose").join("logs");

            log_usage(
                "path.txt".to_string(),
                Usage::new(Some(10), Some(20), Some(30)),
            );

            // Check if log file exists and contains the expected content
            let log_file = log_dir.join("goose.log");
            assert!(log_file.exists());

            let log_content = std::fs::read_to_string(&log_file).unwrap();
            let log: SessionLog =
                serde_json::from_str(log_content.lines().last().unwrap()).unwrap();

            assert!(log.session_file.contains("path.txt"));
            assert_eq!(log.usage.input_tokens, Some(10));
            assert_eq!(log.usage.output_tokens, Some(20));
            assert_eq!(log.usage.total_tokens, Some(30));
        })
    }
}
