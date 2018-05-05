import * as React from 'react';
import { Image, View } from 'react-native';

import checkPng from './images/check.png';
import styles from './styles';

interface IconProps {
  checkMark?: boolean;
  visible?: boolean;
  iconBackground?: string;
}

const Icon = ({ checkMark, visible, iconBackground }: IconProps) => {
  const iconStyles = [styles.icon];
  if (visible) {
    iconStyles.push(styles.iconVisible);
  }
  if (iconBackground) {
    iconStyles.push({ backgroundColor: iconBackground });
  }
  return (
    <View style={iconStyles}>
      {checkMark ? (
        <Image
          resizeMode="contain"
          style={styles.checkIcon}
          source={checkPng}
        />
      ) : null}
    </View>
  );
};

export default Icon;
