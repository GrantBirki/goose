import React, { useState } from 'react';
import { ScrollArea } from '../ui/scroll-area';
import { Card } from '../ui/card';
import { useNavigate } from 'react-router-dom';
import { Settings as SettingsType, Model, Extension, Key } from './types';
import { ToggleableItem } from './ToggleableItem';
import { KeyItem } from './KeyItem';
import { AddModelDialog } from './modals/AddModelDialog';
import { KeyDialog } from './modals/KeyDialog';
import { Modal, ModalContent, ModalHeader, ModalTitle } from '../ui/modal';
import { Button } from '../ui/button';
import { RevealKeysDialog } from './modals/RevealKeysDialog';
import { showToast } from '../ui/toast';
import { ExtensionDetailsDialog } from './modals/ExtensionDetailsDialog';
import { AddExtensionDialog } from './modals/AddExtensionDialog';

const EXTENSIONS_DESCRIPTION = "The Model Context Protocol (MCP) is a system that allows AI models to securely connect with local or remote resources using standard server setups. It works like a client-server setup and expands AI capabilities using three main components: Prompts, Resources, and Tools.";

const DEFAULT_SETTINGS: SettingsType = {
    models: [
        { id: "gpt4", name: "GPT 4.0", description: "Standard config", enabled: false },
        { id: "gpt4lite", name: "GPT 4.0 lite", description: "Standard config", enabled: false },
        { id: "claude", name: "Claude", description: "Standard config", enabled: true }
    ],
    extensions: [
        { 
            id: "fileviewer", 
            name: "File viewer", 
            description: "Local file system access for AI", 
            enabled: true,
            relatedKeys: ["fs_access_key"],
            config: {
                command: "/usr/local/bin/goosed",
                args: ["mcp", "fileviewer"],
            }
        },
        { 
            id: "cloudthing", 
            name: "Cloud thing", 
            description: "AWS cloud integration", 
            enabled: true,
            relatedKeys: ["awscognito", "aws_secret"],
            config: {
                command: "/usr/local/bin/aws-helper",
                args: ["cloud", "sync"],
            }
        },
        { 
            id: "mcpdice", 
            name: "MCP dice", 
            description: "Random number generation for AI", 
            enabled: true,
            relatedKeys: [],
            config: {
                command: "node",
                args: ["mcp", "dice", "--mode=random"],
            }
        },
        { 
            id: "binancedata", 
            name: "Binance market data", 
            description: "Real-time cryptocurrency market data", 
            enabled: true,
            relatedKeys: ["binance_api_key", "binance_secret"],
            config: {
                command: "/usr/local/bin/market-data",
                args: ["binance", "--realtime"],
            }
        }
    ],
    keys: [
        { id: "fs_access_key", name: "File System Access", value: "fs_key_123" },
        { id: "awscognito", name: "AWS Cognito", value: "aws_cog_456" },
        { id: "aws_secret", name: "AWS Secret", value: "aws_secret_789" },
        { id: "binance_api_key", name: "Binance API Key", value: "binance_key_123" },
        { id: "binance_secret", name: "Binance Secret", value: "binance_secret_456" }
    ]
};

export default function Settings() {
    const navigate = useNavigate();
    
    const [settings, setSettings] = React.useState<SettingsType>(() => {
        const saved = localStorage.getItem('user_settings');
        return saved ? JSON.parse(saved) : DEFAULT_SETTINGS;
    });

    // Persist settings changes
    React.useEffect(() => {
        localStorage.setItem('user_settings', JSON.stringify(settings));
    }, [settings]);

    const handleModelToggle = (modelId: string) => {
        setSettings(prev => ({
            ...prev,
            models: prev.models.map(model => ({
                ...model,
                enabled: model.id === modelId
            }))
        }));
    };

    const handleExtensionToggle = (extensionId: string) => {
        setSettings(prev => ({
            ...prev,
            extensions: prev.extensions.map(ext => 
                ext.id === extensionId ? { ...ext, enabled: !ext.enabled } : ext
            )
        }));
    };

    const handleNavClick = (section: string, e: React.MouseEvent) => {
        e.preventDefault();
        const scrollArea = document.querySelector('[data-radix-scroll-area-viewport]');
        const element = document.getElementById(section.toLowerCase());
        
        if (scrollArea && element) {
            const topPos = element.offsetTop;
            scrollArea.scrollTo({
                top: topPos,
                behavior: 'smooth'
            });
        }
    };

    const handleExit = () => {
        navigate('/chat/1', { replace: true }); // Use replace to ensure clean navigation
    };

    const [addModelOpen, setAddModelOpen] = useState(false);
    const [addKeyOpen, setAddKeyOpen] = useState(false);
    const [editingKey, setEditingKey] = useState<Key | null>(null);
    const [showResetConfirm, setShowResetConfirm] = useState(false);
    const [showAllKeys, setShowAllKeys] = useState(false);
    const [selectedExtension, setSelectedExtension] = useState<Extension | null>(null);
    const [addExtensionOpen, setAddExtensionOpen] = useState(false);

    const handleAddModel = (newModel: Model) => {
        setSettings(prev => ({
            ...prev,
            models: [...prev.models, { ...newModel, enabled: false }]
        }));
        setAddModelOpen(false);
    };

    const handleAddKey = (newKey: Key) => {
        setSettings(prev => ({
            ...prev,
            keys: [...prev.keys, newKey]
        }));
        setAddKeyOpen(false);
    };

    const handleUpdateKey = (updatedKey: Key) => {
        setSettings(prev => ({
            ...prev,
            keys: prev.keys.map(key => 
                key.id === updatedKey.id ? updatedKey : key
            )
        }));
        setEditingKey(null);
    };

    const handleCopyKey = async (value: string) => {
        try {
            await navigator.clipboard.writeText(value);
            // Could add a toast notification here
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    const handleDeleteKey = (keyToDelete: Key) => {
        setSettings(prev => ({
            ...prev,
            keys: prev.keys.filter(key => key.id !== keyToDelete.id)
        }));
        setEditingKey(null);
    };

    const handleReset = () => {
        setSettings(DEFAULT_SETTINGS);
        setShowResetConfirm(false);
        showToast("Settings reset to default", "success");
    };

    const handleExtensionClick = (extension: Extension) => {
        setSelectedExtension(extension);
    };

    const handleUpdateExtensionKeys = (updatedKeys: Key[]) => {
        setSettings(prev => ({
            ...prev,
            keys: updatedKeys
        }));
    };

    const handleAddExtension = (newExtension: Extension) => {
        setSettings(prev => ({
            ...prev,
            extensions: [...prev.extensions, newExtension]
        }));
        setAddExtensionOpen(false);
    };

    const handleUpdateExtension = (updatedExtension: Extension) => {
        setSettings(prev => ({
            ...prev,
            extensions: prev.extensions.map(ext => 
                ext.id === updatedExtension.id ? updatedExtension : ext
            )
        }));
        showToast("Extension updated successfully", "success");
    };

    return (
        <div className="h-screen w-full p-[10px]">
            <Card className="h-full w-full bg-card-gradient dark:bg-dark-card-gradient border-none rounded-2xl p-6">
                <div className="h-full w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden p-4">
                    <ScrollArea className="h-full w-full">
                        <div className="flex min-h-full">
                            {/* Left Navigation */}
                            <div className="w-48 border-r border-gray-100 dark:border-gray-700 px-6">
                                <div className="sticky top-8">
                                    <button
                                        onClick={handleExit}
                                        className="flex items-center gap-2 text-gray-600 hover:text-gray-800 
                                            dark:text-gray-400 dark:hover:text-gray-200 mb-16 mt-4"
                                    >
                                        <span className="text-xl">←</span>
                                        <span>Exit</span>
                                    </button>
                                    <div className="space-y-2">
                                        {['Models', 'Extensions', 'Keys'].map((section) => (
                                            <button
                                                key={section}
                                                onClick={(e) => handleNavClick(section, e)}
                                                className="block w-full text-left px-3 py-2 rounded-lg transition-colors
                                                    text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                                            >
                                                {section}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Content Area */}
                            <div className="flex-1 px-8 py-8">
                                <div className="max-w-3xl space-y-12">
                                    {/* Models Section */}
                                    <section id="models">
                                        <div className="flex justify-between items-center mb-4">
                                            <h2 className="text-2xl font-semibold">Models</h2>
                                            <button 
                                                onClick={() => setAddModelOpen(true)}
                                                className="text-indigo-500 hover:text-indigo-600 font-medium"
                                            >
                                                Add Models
                                            </button>
                                        </div>
                                        {settings.models.map(model => (
                                            <ToggleableItem
                                                key={model.id}
                                                {...model}
                                                onToggle={handleModelToggle}
                                            />
                                        ))}
                                    </section>

                                    {/* Extensions Section */}
                                    <section id="extensions">
                                        <div className="flex justify-between items-center mb-4">
                                            <h2 className="text-2xl font-semibold">Extensions</h2>
                                            <button 
                                                onClick={() => setAddExtensionOpen(true)}
                                                className="text-indigo-500 hover:text-indigo-600 font-medium"
                                            >
                                                Add Extension
                                            </button>
                                        </div>
                                        <p className="text-gray-500 dark:text-gray-400 mb-4">{EXTENSIONS_DESCRIPTION}</p>
                                        {settings.extensions.map(ext => (
                                            <div key={ext.id} onClick={() => handleExtensionClick(ext)}>
                                                <ToggleableItem
                                                    {...ext}
                                                    onToggle={handleExtensionToggle}
                                                />
                                            </div>
                                        ))}
                                    </section>

                                    {/* Keys Section */}
                                    <section id="keys">
                                        <div className="flex justify-between items-center mb-4">
                                            <h2 className="text-2xl font-semibold">Keys</h2>
                                            <button 
                                                onClick={() => setAddKeyOpen(true)}
                                                className="text-indigo-500 hover:text-indigo-600 font-medium"
                                            >
                                                Add new key
                                            </button>
                                        </div>
                                        <p className="text-gray-500 dark:text-gray-400 mb-4">{EXTENSIONS_DESCRIPTION}</p>
                                        {settings.keys.map(keyItem => (
                                            <KeyItem
                                                key={keyItem.id}
                                                keyData={keyItem}
                                                onEdit={setEditingKey}
                                                onCopy={handleCopyKey}
                                            />
                                        ))}

                                        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                                            <Button
                                                variant="outline"
                                                onClick={() => setShowAllKeys(true)}
                                                className="w-full text-yellow-600 hover:text-yellow-700 dark:text-yellow-500 dark:hover:text-yellow-400"
                                            >
                                                Reveal All Keys (Dev Only)
                                            </Button>
                                        </div>
                                    </section>

                                    {/* Reset Button */}
                                    <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
                                        <Button
                                            onClick={() => setShowResetConfirm(true)}
                                            variant="destructive"
                                            className="w-full"
                                        >
                                            Reset to Default Settings
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollArea>
                </div>
            </Card>

            {/* Reset Confirmation Dialog */}
            <Modal open={showResetConfirm} onOpenChange={setShowResetConfirm}>
                <ModalContent>
                    <ModalHeader>
                        <ModalTitle>Reset Settings</ModalTitle>
                    </ModalHeader>
                    <div className="py-4">
                        <p className="text-gray-600 dark:text-gray-300">
                            Are you sure you want to reset all settings to their default values? This cannot be undone.
                        </p>
                    </div>
                    <div className="flex justify-end gap-2">
                        <Button
                            variant="outline"
                            onClick={() => setShowResetConfirm(false)}
                        >
                            Cancel
                        </Button>
                        <Button
                            variant="destructive"
                            onClick={handleReset}
                        >
                            Reset Settings
                        </Button>
                    </div>
                </ModalContent>
            </Modal>

            {/* Add the modals */}
            <AddModelDialog
                isOpen={addModelOpen}
                onClose={() => setAddModelOpen(false)}
                onAdd={handleAddModel}
            />
            <KeyDialog
                isOpen={addKeyOpen || !!editingKey}
                onClose={() => {
                    setAddKeyOpen(false);
                    setEditingKey(null);
                }}
                onSubmit={editingKey ? handleUpdateKey : handleAddKey}
                onDelete={handleDeleteKey}
                initialKey={editingKey || undefined}
            />

            <RevealKeysDialog
                isOpen={showAllKeys}
                onClose={() => setShowAllKeys(false)}
                keys={settings.keys}
            />

            {selectedExtension && (
                <ExtensionDetailsDialog
                    isOpen={!!selectedExtension}
                    onClose={() => setSelectedExtension(null)}
                    extension={selectedExtension}
                    keys={settings.keys}
                    onUpdateKeys={handleUpdateExtensionKeys}
                    onUpdateExtension={handleUpdateExtension}
                />
            )}

            <AddExtensionDialog
                isOpen={addExtensionOpen}
                onClose={() => setAddExtensionOpen(false)}
                onAdd={handleAddExtension}
            />
        </div>
    );
} 