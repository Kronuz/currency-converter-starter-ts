import * as React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';

import imageGear from './images/gear.png';
import styles from './styles';

interface HeaderProps {
  onPress: () => any;
}

const Header = ({ onPress }: HeaderProps) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image style={styles.icon} resizeMode="contain" source={imageGear} />
    </TouchableOpacity>
  </View>
);

export default Header;
