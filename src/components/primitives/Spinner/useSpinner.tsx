import type { ISpinnerProps } from './props';

export function useSpinner(props: ISpinnerProps) {
  return {
    spinnerProps: {
      accessible: true,
      accessibilityLabel: props.accessibilityLabel ?? 'loading',
    },
  };
}
