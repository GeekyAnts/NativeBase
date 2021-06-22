import { filterShadowProps } from './../../utils/filterShadowProps';
describe('filterShadowProps', () => {
  test('empty', () => {
    expect(filterShadowProps({}, {}, 'web')).toEqual({ style: {} });
  });
  test('basic', () => {
    expect(
      filterShadowProps(
        {
          top: 10,
          shadowColor: '#FFF',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.18,
          shadowRadius: 1.0,
        },
        {},
        'web'
      )
    ).toEqual({
      top: 10,
      style: {
        shadowColor: '#FFF',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,
      },
    });
  });
});
