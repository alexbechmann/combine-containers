export function combineContainers<T>(component: T, callbacks: ((c: any) => any)[]): any {
  var c = component;
  callbacks.forEach(callback => {
    c = callback(c);
  });
  return c;
}