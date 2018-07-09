# combine-containers
![npm](https://img.shields.io/npm/v/combine-containers.svg)

# Installation

```
npm install combine-containers --save 
```

Use this function to wrap a component with multiple containers such as react-redux, react-form, material-ui styles etc.

# Usage

```tsx
import { combineContainers } from 'combine-containers';

const ContactDialog: props => (
  <div>
    ...
  </div>
);

export default combineContainers(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: 'contactForm',
    destroyOnUnmount: false
  }),
  withStyles(styles, { withTheme: true })
])(ContactDialog);

```

Includes TypesScript typings.
