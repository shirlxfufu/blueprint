import React, { useState } from 'react';
import { Icon } from '@blueprintjs/core';
import styles from '../styles.module.scss';

export interface IconComparisonCardProps {
  iconName: string;
  displayName?: string;
  oldIconSvg: string | null;
  newIconSvg: string | null;
  isUnfilled: boolean;
  hasMajorChange: boolean;
  isManuallyTagged: boolean;
  xinyiName?: string;
  xinyiStatus?: string;
  gregName?: string | null;
  gregStatus?: string;
  gregTags?: string[];
  onToggleUnfilled: () => void;
  onToggleMajorChange: () => void;
  onRename: (newName: string) => void;
}

export const IconComparisonCard: React.FC<IconComparisonCardProps> = ({
  iconName,
  displayName,
  oldIconSvg,
  newIconSvg,
  isUnfilled,
  hasMajorChange,
  isManuallyTagged,
  xinyiName,
  xinyiStatus,
  gregName,
  gregStatus,
  gregTags = [],
  onToggleUnfilled,
  onToggleMajorChange,
  onRename,
}) => {
  const [isEditingName, setIsEditingName] = useState(false);
  const [renameValue, setRenameValue] = useState(xinyiName || '');

  // Determine if we should show naming indicators for Xinyi's version
  const showXinyiRenamed = xinyiStatus === 'renamed';
  const showXinyiKeepAsIs = xinyiStatus === 'keep-as-is';

  // Determine if we should show naming indicators for Greg's version
  const showGregRenamed = gregStatus === 'rename';
  const showGregKeep = gregStatus === 'keep';

  // Check if Xinyi's and Greg's names match
  const namesMatch = xinyiName && gregName && xinyiName === gregName;

  const handleRenameBlur = () => {
    setIsEditingName(false);
    if (renameValue !== (xinyiName || '')) {
      onRename(renameValue);
    }
  };

  const handleRenameKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      setIsEditingName(false);
      onRename(renameValue);
    } else if (e.key === 'Escape') {
      setIsEditingName(false);
      setRenameValue(xinyiName || '');
    }
  };

  const handleNameClick = () => {
    setIsEditingName(true);
    setRenameValue(xinyiName || iconName);
  };

  return (
    <article className={styles.card}>
      {/* Card Header with Tags */}
      <div className={styles.cardHeader}>
        <div className={styles.tagList}>
          {/* Named Differently Tag - show when Xinyi and Greg have different names */}
          {!namesMatch && xinyiName && gregName && (
            <span className={`${styles.tag} ${styles.tagOrange} ${styles.tagActive}`}>
              <Icon icon="warning-sign" size={11} style={{ color: '#FF9800' }} />
              Named Differently
            </span>
          )}
        </div>
      </div>

      {/* Icon Comparison Area - 3 Columns */}
      <div className={styles.comparisonArea} style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
        {/* Original Icon */}
        <div className={styles.iconColumn}>
          <div className={styles.iconBox}>
            {oldIconSvg ? (
              <div dangerouslySetInnerHTML={{ __html: oldIconSvg }} />
            ) : (
              <svg viewBox="0 0 24 24" width="32" height="32">
                <circle cx="12" cy="12" r="8" fill="currentColor" opacity="0.2" />
              </svg>
            )}
          </div>
          <div className={styles.labelGroup}>
            <span className={styles.versionLabel}>Original</span>
            <div className={styles.iconName} style={{ fontSize: '13px' }}>{iconName}</div>
          </div>
        </div>

        {/* Xinyi's Version */}
        <div className={styles.iconColumn}>
          <div className={styles.iconBox}>
            {newIconSvg ? (
              <div dangerouslySetInnerHTML={{ __html: newIconSvg }} />
            ) : (
              <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            )}
          </div>
          <div className={styles.labelGroup}>
            <span className={styles.versionLabel}>Xinyi</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{
                fontSize: '13px',
                fontWeight: showXinyiRenamed ? 500 : 400,
                flex: 1
              }}>
                {xinyiName || iconName}
              </span>
              {namesMatch && (
                <Icon icon="tick-circle" size={14} style={{ color: '#10A86B', flexShrink: 0 }} title="Matches Greg's name" />
              )}
              {showXinyiRenamed && !namesMatch && (
                <Icon icon="lightning" size={11} style={{ color: '#5C70E0', flexShrink: 0 }} />
              )}
              {showXinyiKeepAsIs && !namesMatch && (
                <Icon icon="tick" size={11} style={{ color: '#10A86B', flexShrink: 0 }} />
              )}
            </div>
          </div>
        </div>

        {/* Greg's Version */}
        <div className={styles.iconColumn}>
          <div className={styles.iconBox}>
            {newIconSvg ? (
              <div dangerouslySetInnerHTML={{ __html: newIconSvg }} />
            ) : (
              <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            )}
          </div>
          <div className={styles.labelGroup}>
            <span className={styles.versionLabel}>Greg</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{
                fontSize: '13px',
                fontWeight: showGregRenamed ? 500 : 400,
                flex: 1
              }}>
                {gregName || iconName}
              </span>
              {namesMatch && (
                <Icon icon="tick-circle" size={14} style={{ color: '#10A86B', flexShrink: 0 }} title="Matches Xinyi's name" />
              )}
              {showGregRenamed && !namesMatch && (
                <Icon icon="lightning" size={11} style={{ color: '#5C70E0', flexShrink: 0 }} />
              )}
              {showGregKeep && !namesMatch && (
                <Icon icon="tick" size={11} style={{ color: '#10A86B', flexShrink: 0 }} />
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
