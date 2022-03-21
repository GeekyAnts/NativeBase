import { Platform } from 'react-native';
import theme from '../base';
import { platformSpecificSpaceUnits } from './utils';

describe('platform units on native', () => {
  it('should convert px to absolute on native', () => {
    Platform.OS = 'ios';
    const newTheme = { ...theme };
    newTheme.space = { xs: '1px' };
    const convertedTheme = platformSpecificSpaceUnits(newTheme);
    expect(convertedTheme.space).toEqual({ xs: 1 });
  });

  it('should convert rem to absolute on native', () => {
    Platform.OS = 'ios';
    const newTheme = { ...theme };
    newTheme.space = { xs: '2rem' };
    const convertedTheme = platformSpecificSpaceUnits(newTheme);
    expect(convertedTheme.space).toEqual({ xs: 32 });
  });
});

describe('platform units on web', () => {
  it('should not convert px to rem on web', () => {
    Platform.OS = 'web';
    const newTheme = { ...theme };
    newTheme.space = { xs: '23px' };
    const convertedTheme = platformSpecificSpaceUnits(newTheme);
    expect(convertedTheme.space).toEqual({ xs: '23px' });
  });

  it('should convert absolute to rem on web', () => {
    Platform.OS = 'web';
    const newTheme = { ...theme };
    newTheme.space = { xs: 23 };
    const convertedTheme = platformSpecificSpaceUnits(newTheme);
    expect(convertedTheme.space).toEqual({ xs: '1.4375rem' });
  });
});
