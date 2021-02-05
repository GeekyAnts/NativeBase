import type { ISlideProps } from '../Transitions';

export type ISnackbarProps = ISlideProps & {
  accessibilityAnnouncement: string;
};

export type ISnackbarConfig = {
  enableOverlay?: boolean;
  duration?: number;
  position?: 'top' | 'bottom' | 'center';
};
export type IsetSnackbar = (
  component: React.ReactNode,
  config?: ISnackbarProps & ISnackbarConfig
) => void;
export type IuseSnackbarProps = () => {
  setSnackbar: IsetSnackbar;
};
