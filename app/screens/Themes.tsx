import * as React from 'react';
import { ScrollView, StatusBar } from 'react-native';
import reactNativeExtendedStylesheet from 'react-native-extended-stylesheet';
import { connect, Dispatch } from 'react-redux';
import { NavigationScreenProp } from 'react-navigation';

import { Actions } from '../actions/theme';
import { ListItem, Separator } from '../components/List';

const styles = reactNativeExtendedStylesheet.create({
  $blue: '$primaryBlue',
  $green: '$primaryGreen',
  $orange: '$primaryOrange',
  $purple: '$primaryPurple',
});

interface ThemesProps {
  dispatch: Dispatch<any>;
  navigation: NavigationScreenProp<any>;
}

class Themes extends React.Component<ThemesProps> {
  public render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        <ListItem
          text="Blue"
          onPress={this.handlePressBlueTheme}
          selected
          checkMark={false}
          iconBackground={styles.$blue}
        />
        <Separator />
        <ListItem
          text="Orange"
          onPress={this.handlePressOrangeTheme}
          selected
          checkMark={false}
          iconBackground={styles.$orange}
        />
        <Separator />
        <ListItem
          text="Green"
          onPress={this.handlePressGreenTheme}
          selected
          checkMark={false}
          iconBackground={styles.$green}
        />
        <Separator />
        <ListItem
          text="Purple"
          onPress={this.handlePressPurpleTheme}
          selected
          checkMark={false}
          iconBackground={styles.$purple}
        />
        <Separator />
      </ScrollView>
    );
  }

  private handlePressTheme = (color: string) => {
    this.props.dispatch(Actions.changePrimaryColor(color));
    this.props.navigation.goBack(null);
  };

  private handlePressBlueTheme = () => {
    this.handlePressTheme(styles.$blue);
  }

  private handlePressOrangeTheme = () => {
    this.handlePressTheme(styles.$orange);
  }

  private handlePressGreenTheme = () => {
    this.handlePressTheme(styles.$green);
  }

  private handlePressPurpleTheme = () => {
    this.handlePressTheme(styles.$purple);
  }
}

export default connect()(Themes);
