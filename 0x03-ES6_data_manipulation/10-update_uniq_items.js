export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  const count = weakMap.get(endpoint) || 0;
  weakMap.set(endpoint, count + 1);

  if (count + 1 >= 5) {
    console.log(`${__filename}:${__line}`);
    throw new Error('Endpoint load is high');
  }
}
