export function hasOwnProperty(obj, propName) {
  if (Object.hasOwn) {
    return Object.hasOwn(obj, propName);
  }

  return Object.prototype.hasOwnProperty.call(obj, propName);
}
