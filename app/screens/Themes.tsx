import * as React from 'react';
import { ScrollView, StatusBar } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect, Dispatch } from 'react-redux';
import { NavigationScreenProp } from 'react-navigation';

import { changePrimaryColor } from '../actions/theme';
import { ListItem, Separator } from '../components/List';

const styles = EStyleSheet.create({
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
  private handlePressTheme = (color: string) => {
    this.props.dispatch(changePrimaryColor(color));
    this.props.navigation.goBack(null);
  };

  public render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        <ListItem
          text="Blue"
          onPress={() => this.handlePressTheme(styles.$blue)}
          selected
          checkMark={false}
          iconBackground={styles.$blue}
        />
        <Separator />
        <ListItem
          text="Orange"
          onPress={() => this.handlePressTheme(styles.$orange)}
          selected
          checkMark={false}
          iconBackground={styles.$orange}
        />
        <Separator />
        <ListItem
          text="Green"
          onPress={() => this.handlePressTheme(styles.$green)}
          selected
          checkMark={false}
          iconBackground={styles.$green}
        />
        <Separator />
        <ListItem
          text="Purple"
          onPress={() => this.handlePressTheme(styles.$purple)}
          selected
          checkMark={false}
          iconBackground={styles.$purple}
        />
        <Separator />
      </ScrollView>
    );
  }
}

export default connect()(Themes);
