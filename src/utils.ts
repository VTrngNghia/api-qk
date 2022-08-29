import {
  camelCase,
  isArray,
  isObject,
  isString,
  snakeCase,
  transform,
} from "lodash";

export const snakeCasify = obj =>
  isString(obj)
    ? obj
    : transform(obj, (acc: any, value, key: string, target) => {
        const camelKey = isArray(target) ? key : snakeCase(key);

        acc[camelKey] = isObject(value) ? snakeCasify(value) : value;
      });

export const camelCasify = obj =>
  isString(obj)
    ? obj
    : transform(obj, (acc: any, value, key: string, target) => {
        const camelKey = isArray(target) ? key : camelCase(key);

        acc[camelKey] = isObject(value) ? camelCasify(value) : value;
      });
