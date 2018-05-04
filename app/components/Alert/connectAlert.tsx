import hoistNonReactStatic from 'hoist-non-react-statics';
import * as React from 'react';

import AlertsContext from './context';

const connectAlert = WrappedComponent => {
  const ConnectedAlert = (props, context: AlertsContext) => (
    <WrappedComponent
      {...props}
      alert={context.alert}
      alertWithType={context.alertWithType}
    />
  );
  return hoistNonReactStatic(ConnectedAlert, WrappedComponent);
};

export default connectAlert;
