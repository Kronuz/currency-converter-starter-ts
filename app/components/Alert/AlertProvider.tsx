import * as React from 'react';
import { View } from 'react-native';
import DropdownAlert from 'react-native-dropdownalert';

import AlertsContext from './context';

class AlertProvider extends React.Component {
  dropdown: AlertsContext;

  // childContextTypes:
  getChildContext(): AlertsContext {
    return {
      alert: (...messages: string[]) => this.dropdown.alert(...messages),
      alertWithType: (type: string, title: string,...messages: string[]) => this.dropdown.alertWithType(type, title, ...messages),
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {React.Children.only(this.props.children)}
        <DropdownAlert
          ref={(ref: AlertsContext) => {
            this.dropdown = ref;
          }}
        />
      </View>
    );
  }
}

export default AlertProvider;
