export type ColorMode = 'light' | 'dark';
export interface StorageManager {
  get(init?: ColorMode): Promise<ColorMode | undefined>;
  set(value: ColorMode): void;
}
