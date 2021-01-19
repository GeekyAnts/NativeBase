import type { AccessibilityRole, AccessibilityState } from 'react-native';

export type IAccessibilityProps = {
  accessible?: boolean;
  accessibilityRole?: AccessibilityRole;
  accessibilityState?: AccessibilityState;
  accessibilityLabel?: string;
  accessibilityHint?: string;
};
