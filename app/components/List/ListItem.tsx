import * as React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';

import Icon from './Icon';
import styles from './styles';

interface ListItemProps {
  text: string;
  onPress: (text: string) => any;
  customIcon?: React.ReactElement<any>;
  iconBackground?: string;
  selected?: boolean;
  checkMark?: boolean;
  visible?: boolean;
}

class ListItem extends React.Component<ListItemProps> {
  public render() {
    const {
      text,
      onPress,
      customIcon,
      iconBackground,
      selected = false,
      checkMark = true,
      visible = true,
    } = this.props;
    return (
      <TouchableHighlight onPress={this.onPress} underlayColor={styles.$underlayColor}>
        <View style={styles.row}>
          <Text style={styles.text}>{text}</Text>
          {selected ? (
            <Icon checkMark={checkMark} visible={visible} iconBackground={iconBackground} />
          ) : (
            <Icon />
          )}
          {customIcon}
        </View>
      </TouchableHighlight>
    );
  }

  private onPress = () => {
    const { onPress, text } = this.props;
    onPress(text);
  };
}

export default ListItem;
