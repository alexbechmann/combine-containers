export function combineContainers<T>(o: T, callbacks: ((c: T) => any)[]): any {
  var c = o;
  callbacks.forEach(callback => {
    c = callback(c);
  });
  return c;
}