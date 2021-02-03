import type { ISpinnerProps } from './types';

export function useSpinner(props: ISpinnerProps) {
  return {
    spinnerProps: {
      accessible: true,
      accessibilityLabel: props.accessibilityLabel ?? 'loading',
    },
  };
}
