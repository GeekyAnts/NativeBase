export function isEmptyObj(obj: Object) {
  for (var _x in obj) {
    return false;
  }
  return true;
}
