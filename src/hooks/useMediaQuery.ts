import { useWindowDimensions } from 'react-native';
import isNil from 'lodash.isnil';

type QueryKeys =
  | 'maxWidth'
  | 'minWidth'
  | 'maxHeight'
  | 'minHeight'
  | 'orientation';

type SubQuery = {
  [queryKey in QueryKeys]?: number | string;
};
type Query = Array<SubQuery>;

export function useMediaQuery(query: SubQuery | Query) {
  let dims = useWindowDimensions();
  const height = dims?.height;
  const width = dims?.width;
  return iterateQuery(query, height, width);
}

function iterateQuery(
  query: SubQuery | Query,
  height?: number,
  width?: number
) {
  let key;
  let val;
  let queryResults = [];
  if (Array.isArray(query)) {
    query.forEach((subQuery: SubQuery) => {
      key = Object.keys(subQuery)[0];
      val = Object.values(subQuery)[0];
      queryResults.push(calculateQuery(key, val, height, width));
    });
  } else {
    key = Object.keys(query)[0];
    val = Object.values(query)[0];
    queryResults.push(calculateQuery(key, val, height, width));
  }
  return queryResults;
}

function calculateQuery(
  key: string,
  val?: number | string,
  height?: number,
  width?: number
) {
  let retval;
  if (isNil(width) || isNil(height) || isNil(val)) {
    return;
  }
  switch (key) {
    case 'maxWidth':
      retval = !isNil(val) ? width <= val : undefined;
      break;
    case 'minWidth':
      retval = !isNil(val) ? width >= val : undefined;
      break;
    case 'maxHeight':
      retval = !isNil(val) ? height <= val : undefined;
      break;
    case 'minHeight':
      retval = !isNil(val) ? height >= val : undefined;
      break;
    case 'orientation':
      if (!isNil(val)) {
        if (width > height) {
          retval = val === 'landscape';
        } else {
          retval = val === 'portrait';
        }
      }
      break;
    default:
      break;
  }
  return retval;
}
