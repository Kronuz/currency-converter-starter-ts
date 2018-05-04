import * as React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';

import Icon from './Icon';
import styles from './styles';

interface ListItemProps {
  text: string;
  onPress: () => any;
  selected: boolean;
  checkmark: boolean;
  visible: boolean;
  customIcon?: React.ReactElement<any>;
  iconBackground?: string;
}

const ListItem = ({
  text,
  onPress,
  customIcon,
  iconBackground,
  selected = false,
  checkmark = true,
  visible = true,
}: ListItemProps) => (
  <TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>
    <View style={styles.row}>
      <Text style={styles.text}>{text}</Text>
      {selected ? (
        <Icon
          checkmark={checkmark}
          visible={visible}
          iconBackground={iconBackground}
        />
      ) : (
        <Icon />
      )}
      {customIcon}
    </View>
  </TouchableHighlight>
);

export default ListItem;
