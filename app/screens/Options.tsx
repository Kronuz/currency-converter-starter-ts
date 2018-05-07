import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import { Linking, Platform, ScrollView, StatusBar } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

import { connectAlert, AlertContext } from '../components/Alert';
import { ListItem, Separator } from '../components/List';

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';
const ICON_COLOR = '#868686';
const ICON_SIZE = 23;

interface OptionsProps extends AlertContext {
  navigation: NavigationScreenProp<any>;
  name: string;
}

class Options extends React.Component<OptionsProps> {
  public render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        <ListItem
          text="Themes"
          onPress={this.handleThemesPress}
          customIcon={
            <Ionicons name={`${ICON_PREFIX}-arrow-forward`} color={ICON_COLOR} size={ICON_SIZE} />
          }
        />
        <Separator />
        <ListItem
          text="ExchangeRatesAPI.io"
          onPress={this.handleSitePress}
          customIcon={<Ionicons name={`${ICON_PREFIX}-link`} color={ICON_COLOR} size={ICON_SIZE} />}
        />
        <Separator />
      </ScrollView>
    );
  }

  private handleThemesPress = () => {
    this.props.navigation.navigate('Themes');
  };

  private handleSitePress = () => {
    Linking.openURL('https://exchangeratesapi.io').catch(() =>
      this.props.alertWithType('error', 'Sorry!', "ExchangeRatesAPI.io can't be opened"),
    );
  };
}

export default connectAlert(Options);
