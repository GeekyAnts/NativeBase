export type ColorMode = 'light' | 'dark';
export interface StorageManager {
  get(init?: ColorMode): Promise<ColorMode | undefined>;
  set(value: ColorMode): void;
}

export interface ColorModeOptions {
  initialColorMode?: ColorMode;
  useSystemColorMode?: boolean;
}

export type IColorModeProviderProps = {
  value?: ColorMode;
  children?: React.ReactNode;
  options: ColorModeOptions;
  colorModeManager?: StorageManager;
};

export interface ColorModeContextType {
  colorMode: ColorMode;
  toggleColorMode: () => void;
  setColorMode: (value: any) => void;
}
