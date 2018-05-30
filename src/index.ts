export function combineContainers(
  component: any,
  callbacks: Array<(_: any) => any>
): any {
  let c = component;
  callbacks.forEach(callback => {
    c = callback(c);
  });
  return c;
}