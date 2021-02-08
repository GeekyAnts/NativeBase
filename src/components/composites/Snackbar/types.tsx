import type { ISlideProps } from '../Transitions';

export type ISnackbarProps = ISlideProps & {
  accessibilityAnnouncement?: string;
  autoHideDuration?: number;
};

export type ISnackbarConfig = {
  enableOverlay?: boolean;
  position?: 'top' | 'bottom' | 'center';
};
export type IsetSnackbar = (
  component: React.ReactNode,
  config?: ISnackbarProps & ISnackbarConfig
) => void;
export type IuseSnackbarProps = () => {
  setSnackbar: IsetSnackbar;
};
