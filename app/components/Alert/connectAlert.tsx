import hoistNonReactStatics from 'hoist-non-react-statics';
import * as React from 'react';

import { Alert, AlertContext } from './AlertProvider';

const connectAlert = <P extends AlertContext>(
  UnwrappedComponent: React.ComponentType<P>
) => {
  class ConnectedAlert extends React.Component<P> {
    render() {
      return (
        <Alert.Consumer>
        {
          (context: AlertContext) => <UnwrappedComponent
            {...this.props}
            alertWithType={context.alertWithType}
          />
        }
        </Alert.Consumer>
      );
    }
  }
  return hoistNonReactStatics(ConnectedAlert, UnwrappedComponent);
};

export default connectAlert;
