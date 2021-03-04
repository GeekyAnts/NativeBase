import { calculatePaddingProps } from './../useSafeArea/utils';

describe('calculatePaddingProps(useSafeArea)', () => {
  test('Generic inset(boolean)', () => {
    expect(
      calculatePaddingProps(
        { safeArea: true },
        {},
        { top: 0, left: 0, right: 0, bottom: 0 },
        {}
      )
    ).toEqual({});
  });
  test('Generic inset(number)', () => {
    expect(
      calculatePaddingProps(
        { safeArea: 2 },
        {},
        { top: 0, left: 0, right: 0, bottom: 0 },
        { 2: '2' }
      )
    ).toEqual({ pt: '2px', pb: '2px', pl: '2px', pr: '2px' });
  });
  test('Top inset(boolean)', () => {
    expect(
      calculatePaddingProps(
        { safeAreaTop: true },
        {},
        { top: 10, left: 0, right: 0, bottom: 0 },
        {}
      )
    ).toEqual({ pt: '10px' });
  });
  test('Top inset(number)', () => {
    expect(
      calculatePaddingProps(
        { safeAreaTop: 2 },
        {},
        { top: 0, left: 0, right: 0, bottom: 0 },
        { 2: '2' }
      )
    ).toEqual({ pt: '2px' });
  });
  test('Top inset(boolean) with padding', () => {
    expect(
      calculatePaddingProps(
        { safeAreaTop: true },
        { pt: 10 },
        { top: 10, left: 0, right: 0, bottom: 0 },
        { 10: '10' }
      )
    ).toEqual({ pt: '20px' });
  });
  test('Top inset(number) with padding', () => {
    expect(
      calculatePaddingProps(
        { safeAreaTop: 2 },
        { pt: 10 },
        { top: 10, left: 0, right: 0, bottom: 0 },
        { 2: '2', 10: '10' }
      )
    ).toEqual({ pt: '12px' });
  });
  test('Bottom inset(boolean)', () => {
    expect(
      calculatePaddingProps(
        { safeAreaBottom: true },
        {},
        { top: 10, left: 0, right: 0, bottom: 20 },
        {}
      )
    ).toEqual({ pb: '20px' });
  });
  test('Bottom inset(number)', () => {
    expect(
      calculatePaddingProps(
        { safeAreaBottom: 2 },
        {},
        { top: 10, left: 0, right: 0, bottom: 20 },
        { 2: '2' }
      )
    ).toEqual({ pb: '2px' });
  });
  test('Bottom inset(boolean) with padding', () => {
    expect(
      calculatePaddingProps(
        { safeAreaBottom: true },
        { py: 10 },
        { top: 10, left: 0, right: 0, bottom: 20 },
        { 2: '2', 10: '20' }
      )
    ).toEqual({ pb: '40px' });
  });
  test('Bottom inset(number) with padding', () => {
    expect(
      calculatePaddingProps(
        { safeAreaBottom: 2 },
        { py: 10 },
        { top: 10, left: 0, right: 0, bottom: 20 },
        { 2: '2', 10: '20' }
      )
    ).toEqual({ pb: '22px' });
  });
  test('Left inset(boolean)', () => {
    expect(
      calculatePaddingProps(
        { safeAreaLeft: true },
        {},
        { top: 10, left: 20, right: 0, bottom: 20 },
        {}
      )
    ).toEqual({ pl: '20px' });
  });
  test('Left inset(number)', () => {
    expect(
      calculatePaddingProps(
        { safeAreaLeft: 2 },
        {},
        { top: 10, left: 20, right: 0, bottom: 20 },
        { 2: '2', 10: '20' }
      )
    ).toEqual({ pl: '2px' });
  });
  test('Left inset(boolean) with padding', () => {
    expect(
      calculatePaddingProps(
        { safeAreaLeft: true },
        { py: 10, pl: 20 },
        { top: 10, left: 20, right: 0, bottom: 20 },
        { 20: '20' }
      )
    ).toEqual({ pl: '40px' });
  });
  test('Left inset(number) with padding', () => {
    expect(
      calculatePaddingProps(
        { safeAreaLeft: 2 },
        { py: 10, pl: 20 },
        { top: 10, left: 20, right: 0, bottom: 20 },
        { 2: '2', 20: '20' }
      )
    ).toEqual({ pl: '22px' });
  });
  test('Right inset(boolean)', () => {
    expect(
      calculatePaddingProps(
        { safeAreaRight: true },
        {},
        { top: 10, left: 20, right: 20, bottom: 20 },
        {}
      )
    ).toEqual({ pr: '20px' });
  });
  test('Right inset(number)', () => {
    expect(
      calculatePaddingProps(
        { safeAreaRight: 2 },
        {},
        { top: 10, left: 20, right: 20, bottom: 20 },
        { 2: '2' }
      )
    ).toEqual({ pr: '2px' });
  });
  test('Right inset(boolean) with padding', () => {
    expect(
      calculatePaddingProps(
        { safeAreaRight: true },
        { pr: 20 },
        { top: 10, left: 20, right: 20, bottom: 20 },
        { 20: '20' }
      )
    ).toEqual({ pr: '40px' });
  });
  test('Right inset(number) with padding', () => {
    expect(
      calculatePaddingProps(
        { safeAreaRight: 2 },
        { pr: 20 },
        { top: 10, left: 20, right: 20, bottom: 20 },
        { 2: '2', 20: '20' }
      )
    ).toEqual({ pr: '22px' });
  });
  test('X inset(boolean)', () => {
    expect(
      calculatePaddingProps(
        { safeAreaX: true },
        {},
        { top: 10, left: 20, right: 20, bottom: 20 },
        {}
      )
    ).toEqual({ pl: '20px', pr: '20px' });
  });
  test('X inset(number)', () => {
    expect(
      calculatePaddingProps(
        { safeAreaX: 2 },
        {},
        { top: 10, left: 20, right: 20, bottom: 20 },
        { 2: '2' }
      )
    ).toEqual({ pl: '2px', pr: '2px' });
  });
  test('X insets(boolean) with padding', () => {
    expect(
      calculatePaddingProps(
        { safeAreaX: true },
        { px: 20 },
        { top: 10, left: 20, right: 20, bottom: 20 },
        { 20: '20' }
      )
    ).toEqual({ pl: '40px', pr: '40px' });
  });
  test('X insets(number) with padding', () => {
    expect(
      calculatePaddingProps(
        { safeAreaX: 2 },
        { px: 20 },
        { top: 10, left: 20, right: 20, bottom: 20 },
        { 2: '2', 20: '20' }
      )
    ).toEqual({ pl: '22px', pr: '22px' });
  });
  test('Y inset(boolean)', () => {
    expect(
      calculatePaddingProps(
        { safeAreaY: true },
        {},
        { top: 10, left: 20, right: 20, bottom: 20 },
        {}
      )
    ).toEqual({ pt: '10px', pb: '20px' });
  });
  test('Y inset(number)', () => {
    expect(
      calculatePaddingProps(
        { safeAreaY: 2 },
        {},
        { top: 10, left: 20, right: 20, bottom: 20 },
        { 2: '2' }
      )
    ).toEqual({ pt: '2px', pb: '2px' });
  });
  test('Y insets(boolean) with padding', () => {
    expect(
      calculatePaddingProps(
        { safeAreaY: true },
        { p: 10 },
        { top: 10, left: 20, right: 20, bottom: 20 },
        { 10: '10' }
      )
    ).toEqual({ pt: '20px', pb: '30px' });
  });
  test('Y insets(number) with padding', () => {
    expect(
      calculatePaddingProps(
        { safeAreaY: 2 },
        { p: 10 },
        { top: 10, left: 20, right: 20, bottom: 20 },
        { 2: '2', 10: '10' }
      )
    ).toEqual({ pt: '12px', pb: '12px' });
  });
  test('All insets(boolean)', () => {
    expect(
      calculatePaddingProps(
        { safeArea: true },
        {},
        { top: 10, left: 20, right: 20, bottom: 20 },
        {}
      )
    ).toEqual({ pt: '10px', pb: '20px', pl: '20px', pr: '20px' });
  });
  test('All insets(number)', () => {
    expect(
      calculatePaddingProps(
        { safeArea: 2 },
        {},
        { top: 10, left: 20, right: 20, bottom: 20 },
        { 2: '2' }
      )
    ).toEqual({ pt: '2px', pb: '2px', pl: '2px', pr: '2px' });
  });
  test('All insets(boolean) with padding', () => {
    expect(
      calculatePaddingProps(
        { safeArea: true },
        { pt: 10 },
        { top: 10, left: 20, right: 20, bottom: 20 },
        { 10: '10' }
      )
    ).toEqual({ pt: '20px', pb: '20px', pl: '20px', pr: '20px' });
  });
  test('All insets(number) with padding', () => {
    expect(
      calculatePaddingProps(
        { safeArea: 2 },
        { pt: 10 },
        { top: 10, left: 20, right: 20, bottom: 20 },
        { 2: '2', 10: '10' }
      )
    ).toEqual({ pt: '12px', pb: '2px', pl: '2px', pr: '2px' });
  });
});
