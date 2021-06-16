export function getColorFormColorScheme(props: Record<string, any>) {
  const { theme, colorScheme, isDisabled } = props;
  const simpleColorScheme = colorScheme.split('.')[0];
  if (isDisabled) return 'gray.300';
  else if (simpleColorScheme in theme.colors) {
    return theme.colors[simpleColorScheme][0] === '#'
      ? simpleColorScheme
      : theme.colors[simpleColorScheme][400] ||
          theme.colors[simpleColorScheme][200];
  } else return 'primary.200';
}

// TODO: This function can be removed.
export function getColorScheme(
  props: Record<string, any>,
  customColorScheme?: string
) {
  let { theme, colorScheme } = props;
  colorScheme = customColorScheme || colorScheme;
  if (!(colorScheme in theme.colors)) return 'primary';
  else {
    if (typeof theme.colors[colorScheme] === 'object') return colorScheme;
  }
}

export type Dict = Record<string, any>;
