# combine-containers



![npm](https://img.shields.io/npm/v/combine-containers.svg)


Use this function to wrap a component with multiple containers such as react-redux, react-form, material-ui styles etc.

# Usage

```
import { combineContainers } from 'combine-containers';

const ContactDialogComponent: props => (
  <div>
    ...
  </div>
);

export const ContactDialog = combineContainers(ContactDialogComponent, [
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: 'contactForm',
    destroyOnUnmount: false
  }),
  withStyles(styles, { withTheme: true })
]);

```

Includes TypesSript typings.
