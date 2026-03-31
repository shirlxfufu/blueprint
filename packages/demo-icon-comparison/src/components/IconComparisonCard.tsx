import React, { useState } from 'react';
import { Tag, Icon } from '@blueprintjs/core';
import styles from '../styles.module.scss';

export interface IconComparisonCardProps {
  iconName: string;
  displayName?: string;
  oldIconSvg: string | null;
  newIconSvg: string | null;
  isUnfilled: boolean;
  hasMajorChange: boolean;
  isManuallyTagged: boolean;
  newName?: string;
  nameStatus?: 'renamed' | 'keep-as-is';
  isEdited?: boolean;
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
  newName,
  nameStatus,
  isEdited,
  onToggleUnfilled,
  onToggleMajorChange,
  onRename,
}) => {
  const [isEditingName, setIsEditingName] = useState(false);
  const [renameValue, setRenameValue] = useState(newName || '');

  // Determine if we should show naming indicators
  const showRenamedTag = nameStatus === 'renamed' && !isEdited;
  const showKeepAsIsTag = nameStatus === 'keep-as-is' && !isEdited;
  const showEditedTag = isEdited;
  const hasAnyNameTag = showRenamedTag || showKeepAsIsTag || showEditedTag;
  const hasNameChange = newName && newName !== iconName;

  const handleRenameBlur = () => {
    setIsEditingName(false);
    if (renameValue !== (newName || '')) {
      onRename(renameValue);
    }
  };

  const handleRenameKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      setIsEditingName(false);
      onRename(renameValue);
    } else if (e.key === 'Escape') {
      setIsEditingName(false);
      setRenameValue(newName || '');
    }
  };

  const handleNameClick = () => {
    setIsEditingName(true);
    setRenameValue(newName || iconName);
  };

  return (
    <article className={styles.card}>
      {/* Card Header with Tags */}
      <div className={styles.cardHeader}>
        <div className={styles.tagList}>
          {/* Outline Change Tag */}
          {isUnfilled ? (
            <span className={`${styles.tag} ${styles.tagOutline} ${styles.tagActive}`}>
              <span className={`${styles.filterDot} ${styles.dotAmber}`}></span>
              Outline Change
              <button
                className={styles.tagRemove}
                onClick={onToggleUnfilled}
                aria-label="Remove outline change tag"
              >
                ×
              </button>
            </span>
          ) : (
            <span
              className={`${styles.tag} ${styles.tagOutline} ${styles.tagInactive}`}
              onClick={onToggleUnfilled}
            >
              <span className={`${styles.filterDot} ${styles.dotAmber}`}></span>
              Outline Change
            </span>
          )}

          {/* Major Design Change Tag */}
          {hasMajorChange ? (
            <span className={`${styles.tag} ${styles.tagDesign} ${styles.tagActive}`}>
              <span className={`${styles.filterDot} ${styles.dotViolet}`}></span>
              Design Change
              <button
                className={styles.tagRemove}
                onClick={onToggleMajorChange}
                aria-label="Remove design change tag"
              >
                ×
              </button>
            </span>
          ) : (
            <span
              className={`${styles.tag} ${styles.tagDesign} ${styles.tagInactive}`}
              onClick={onToggleMajorChange}
            >
              <span className={`${styles.filterDot} ${styles.dotViolet}`}></span>
              Design Change
            </span>
          )}

          {/* Renamed Tag */}
          {showRenamedTag && (
            <span className={`${styles.tag} ${styles.tagActive}`} style={{ backgroundColor: 'rgba(92, 112, 224, 0.15)', borderColor: 'rgba(92, 112, 224, 0.3)' }}>
              <Icon icon="exchange" size={12} style={{ opacity: 0.7 }} />
              Renamed
            </span>
          )}

          {/* Keep As-Is Tag */}
          {showKeepAsIsTag && (
            <span className={`${styles.tag} ${styles.tagActive}`} style={{ backgroundColor: 'rgba(16, 168, 107, 0.15)', borderColor: 'rgba(16, 168, 107, 0.3)' }}>
              <Icon icon="tick-circle" size={12} style={{ opacity: 0.7 }} />
              Keep As-Is
            </span>
          )}

          {/* Edited Tag */}
          {showEditedTag && (
            <span className={`${styles.tag} ${styles.tagActive}`} style={{ backgroundColor: 'rgba(138, 92, 224, 0.15)', borderColor: 'rgba(138, 92, 224, 0.3)' }}>
              <Icon icon="edit" size={12} style={{ opacity: 0.7 }} />
              Edited
            </span>
          )}
        </div>
      </div>

      {/* Icon Comparison Area */}
      <div className={styles.comparisonArea}>
        <div className={styles.vsBadge}>VS</div>

        {/* Current Icon */}
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
            <span className={styles.versionLabel}>Current</span>
            <div className={styles.iconName}>{iconName}</div>
          </div>
        </div>

        {/* New Icon */}
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
            <span className={styles.versionLabel}>New</span>

            {/* Name display - click to edit */}
            <div style={{ position: 'relative', width: '100%', minHeight: '28px' }}>
              {/* Icon indicator - always rendered to prevent movement */}
              {hasAnyNameTag && (
                <div style={{ position: 'absolute', right: '4px', top: '50%', transform: 'translateY(-50%)', zIndex: 10, pointerEvents: 'none' }}>
                  {showRenamedTag && <Icon icon="exchange" size={12} style={{ color: '#5C70E0', opacity: 0.7 }} />}
                  {showKeepAsIsTag && <Icon icon="tick-circle" size={12} style={{ color: '#10A86B', opacity: 0.7 }} />}
                  {showEditedTag && <Icon icon="edit" size={12} style={{ color: '#8A5CE0', opacity: 0.7 }} />}
                </div>
              )}

              {isEditingName ? (
                <input
                  type="text"
                  className={styles.iconNameInput}
                  value={renameValue}
                  onChange={(e) => setRenameValue(e.target.value)}
                  onBlur={handleRenameBlur}
                  onKeyDown={handleRenameKeyPress}
                  placeholder={iconName}
                  autoFocus
                  style={{ paddingRight: hasAnyNameTag ? '28px' : '4px' }}
                />
              ) : (
                <div style={{ display: 'flex', alignItems: 'center', padding: '4px 0', paddingRight: hasAnyNameTag ? '28px' : '4px', cursor: 'text', borderRadius: '3px', transition: 'background-color 150ms' }} onClick={handleNameClick}>
                  <span style={hasNameChange ? { fontSize: '14px', fontWeight: 500, color: '#5C70E0', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' } : { fontSize: '14px', fontWeight: 400, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {newName || iconName}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
