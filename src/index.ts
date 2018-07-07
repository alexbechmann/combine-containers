export const combineContainers = (callbacks: Array<(_: any) => any>) => (component: any) => {
  let c = component;
  callbacks.forEach(callback => {
    c = callback(c);
  });
  return c;
}