import { Platform } from 'react-native';

export function canUseDom() {
  if (typeof window !== 'undefined' || Platform.OS !== 'web') {
    return true;
  }
  return false;
}
