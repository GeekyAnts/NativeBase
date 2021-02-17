import { calculatePaddingProps } from './../useSafeArea/utils';

describe('calculatePaddingProps(useSafeArea)', () => {
  test('Empty', () => {
    expect(
      calculatePaddingProps(
        { safeArea: true },
        {},
        { top: 0, left: 0, right: 0, bottom: 0 },
        {}
      )
    ).toEqual({});
  });
  test('Top inset', () => {
    expect(
      calculatePaddingProps(
        { safeAreaTop: true },
        {},
        { top: 10, left: 0, right: 0, bottom: 0 },
        {}
      )
    ).toEqual({ pt: '10px' });
  });
  test('Top inset with padding', () => {
    expect(
      calculatePaddingProps(
        { safeAreaTop: true },
        { pt: 10 },
        { top: 10, left: 0, right: 0, bottom: 0 },
        { 10: '10' }
      )
    ).toEqual({ pt: '20px' });
  });
  test('Bottom inset', () => {
    expect(
      calculatePaddingProps(
        { safeAreaBottom: true },
        {},
        { top: 10, left: 0, right: 0, bottom: 20 },
        {}
      )
    ).toEqual({ pb: '20px' });
  });
  test('Bottom inset with padding', () => {
    expect(
      calculatePaddingProps(
        { safeAreaBottom: true },
        { py: 10 },
        { top: 10, left: 0, right: 0, bottom: 20 },
        { 10: '20' }
      )
    ).toEqual({ pb: '40px' });
  });
  test('Left inset', () => {
    expect(
      calculatePaddingProps(
        { safeAreaLeft: true },
        {},
        { top: 10, left: 20, right: 0, bottom: 20 },
        {}
      )
    ).toEqual({ pl: '20px' });
  });
  test('Left inset with padding', () => {
    expect(
      calculatePaddingProps(
        { safeAreaLeft: true },
        { py: 10, pl: 20 },
        { top: 10, left: 20, right: 0, bottom: 20 },
        { 20: '20' }
      )
    ).toEqual({ pl: '40px' });
  });
  test('Right inset', () => {
    expect(
      calculatePaddingProps(
        { safeAreaRight: true },
        {},
        { top: 10, left: 20, right: 20, bottom: 20 },
        {}
      )
    ).toEqual({ pr: '20px' });
  });
  test('Right inset with padding', () => {
    expect(
      calculatePaddingProps(
        { safeAreaRight: true },
        { pr: 20 },
        { top: 10, left: 20, right: 20, bottom: 20 },
        { 20: '20' }
      )
    ).toEqual({ pr: '40px' });
  });
  test('X inset', () => {
    expect(
      calculatePaddingProps(
        { safeAreaX: true },
        {},
        { top: 10, left: 20, right: 20, bottom: 20 },
        {}
      )
    ).toEqual({ pl: '20px', pr: '20px' });
  });
  test('X inset with padding', () => {
    expect(
      calculatePaddingProps(
        { safeAreaX: true },
        { px: 20 },
        { top: 10, left: 20, right: 20, bottom: 20 },
        { 20: '20' }
      )
    ).toEqual({ pl: '40px', pr: '40px' });
  });
  test('Y inset', () => {
    expect(
      calculatePaddingProps(
        { safeAreaY: true },
        {},
        { top: 10, left: 20, right: 20, bottom: 20 },
        {}
      )
    ).toEqual({ pt: '10px', pb: '20px' });
  });
  test('Y inset with padding', () => {
    expect(
      calculatePaddingProps(
        { safeAreaY: true },
        { p: 10 },
        { top: 10, left: 20, right: 20, bottom: 20 },
        { 10: '10' }
      )
    ).toEqual({ pt: '20px', pb: '30px' });
  });
  test('All insets', () => {
    expect(
      calculatePaddingProps(
        { safeArea: true },
        {},
        { top: 10, left: 20, right: 20, bottom: 20 },
        {}
      )
    ).toEqual({ pt: '10px', pb: '20px', pl: '20px', pr: '20px' });
  });
  test('All inset with padding', () => {
    expect(
      calculatePaddingProps(
        { safeArea: true },
        { pt: 10 },
        { top: 10, left: 20, right: 20, bottom: 20 },
        { 10: '10' }
      )
    ).toEqual({ pt: '20px', pb: '20px', pl: '20px', pr: '20px' });
  });
});
