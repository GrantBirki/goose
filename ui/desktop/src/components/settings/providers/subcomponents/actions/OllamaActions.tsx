import React from 'react';
import { AddButton, DeleteButton, GearSettingsButton, RefreshButton } from './ActionButtons';

interface OllamaConfigDetails {
  is_set: boolean;
  location: 'app' | 'host' | null;
}

interface OllamaActionsProps {
  isConfigured: boolean;
  ollamaConfig: OllamaConfigDetails;
  onRefresh?: (e: React.MouseEvent) => void;
  onConfigure?: () => void;
  onDelete?: () => void;
  onShowSettings?: () => void;
}

export default function OllamaActions({
  isConfigured,
  ollamaConfig,
  onRefresh,
  onConfigure,
  onDelete,
  onShowSettings,
}: OllamaActionsProps) {
  const showHostDeleteButton = isConfigured && ollamaConfig.location === 'host' && !onDelete;

  const showRefreshButton = !isConfigured && onRefresh;

  const showAddHostUrlButton = isConfigured && ollamaConfig.location === 'app' && onConfigure;

  const showHostUrlSettingsButton =
    isConfigured && ollamaConfig.location === 'host' && onShowSettings;

  // We’ll figure out which buttons to render:

  // 1) Refresh button if not configured
  // 2) If configured via app => show "plus" to switch to host config
  // 3) If configured via host => show "X" to remove the host and "gear" to edit

  return (
    // TODO: is this the right class name?
    <div className="flex items-center space-x-2">
      {/* (1) Refresh button if not configured */}
      {showRefreshButton && (
        <RefreshButton
          tooltip="Refresh to check if Ollama is running."
          onClick={(e) => {
            e.stopPropagation();
            onRefresh?.(e);
          }}
        ></RefreshButton>
      )}

      {/* (2) If configured location = 'app', show a plus button to switch / set host */}
      {showAddHostUrlButton && (
        <AddButton
          tooltip="Switch to custom OLLAMA_HOST."
          onClick={(e) => {
            e.stopPropagation();
            onConfigure();
          }}
        ></AddButton>
      )}

      {/* (3) If configured location = 'host', show an X to delete or revert config */}
      {showHostDeleteButton && (
        <DeleteButton
          tooltip="Delete OLLAMA_HOST."
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
        ></DeleteButton>
      )}

      {/* (4) If configured location = 'host', show a gear to view and edit config */}
      {showHostUrlSettingsButton && (
        <GearSettingsButton
          tooltip={'View and edit OLLAMA_HOST'}
          onClick={(e) => {
            e.stopPropagation();
            onShowSettings?.();
          }}
        ></GearSettingsButton>
      )}
    </div>
  );
}
