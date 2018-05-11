import * as React from 'react';

export function combineContainers<TComponent extends React.ComponentType<TProps>, TProps>(
  component: React.ComponentType<TProps>,
  callbacks: Array<(_: React.ComponentType<TProps>) => any>
): React.ComponentType<any> {
  let c = component;
  callbacks.forEach(callback => {
    c = callback(c);
  });
  return c;
}