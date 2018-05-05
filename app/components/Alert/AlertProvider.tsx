import * as React from 'react';
import { View } from 'react-native';
import DropdownAlert from 'react-native-dropdownalert';

export interface AlertContext {
  alertWithType(type: string, title: string, ...messages: string[]): void;
}
const defaultAlertContext: AlertContext = {
  alertWithType: () => {},
};
export const Alert = React.createContext<AlertContext>(defaultAlertContext);

export class AlertProvider extends React.Component {
  dropdown: AlertContext = defaultAlertContext;

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Alert.Provider
          value={{
            alertWithType: (
              type: string,
              title: string,
              ...messages: string[]
            ) => this.dropdown.alertWithType(type, title, ...messages),
          }}
        >
          {React.Children.only(this.props.children)}
        </Alert.Provider>

        <DropdownAlert
          ref={(ref: AlertContext) => {
            this.dropdown = ref;
          }}
        />
      </View>
    );
  }
}
