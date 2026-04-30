export interface IconData {
  name: string;
  displayName?: string;
  oldIcon?: string; // Old Blueprint SVG content
  newIconSvg?: string; // New Figma SVG content
  isUnfilled: boolean; // Changed from filled to outlined
  hasMajorChange: boolean; // Major design change
  isManuallyTagged: boolean; // User manually set any tag
  newName?: string; // Renamed icon name (legacy)
  nameStatus?: 'renamed' | 'keep-as-is'; // Icon naming status from mapping (legacy)
  isEdited?: boolean; // User manually edited the name
  // New fields for 3-column comparison
  xinyiName?: string; // Xinyi's visually-analyzed name
  xinyiStatus?: string; // Xinyi's naming status (renamed/keep-as-is)
  gregName?: string | null; // Greg's proposed name
  gregStatus?: string; // Greg's naming status (rename/keep)
  gregTags?: string[]; // Greg's tags for this icon
}

export interface IconMetadata {
  iconName: string;
  displayName: string;
  tags: string;
  group: string;
}

export interface ManualOverrides {
  [iconName: string]: {
    isUnfilled?: boolean;
    hasMajorChange?: boolean;
    newName?: string; // Renamed icon name
    isNameManuallyOverridden?: boolean; // User manually changed the name
    timestamp?: number; // When last edited
  };
}
