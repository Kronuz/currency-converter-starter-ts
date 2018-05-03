import React from 'react';
import PropTypes from 'prop-types';

import { View, Image } from 'react-native';

import styles from './styles';
import imageCheck from './images/check.png';

const Icon = ({ checkmark, visible, iconBackground }) => {
  const iconStyles = [styles.icon];
  if (visible) {
    iconStyles.push(styles.iconVisible);
  }
  if (iconBackground) {
    iconStyles.push({ backgroundColor: iconBackground });
  }
  return (
    <View style={iconStyles}>
      {checkmark ? (
        <Image
          resizeMode="contain"
          style={styles.checkIcon}
          source={imageCheck}
        />
      ) : null}
    </View>
  );
};

Icon.propTypes = {
  checkmark: PropTypes.bool,
  visible: PropTypes.bool,
  iconBackground: PropTypes.string,
};

export default Icon;
