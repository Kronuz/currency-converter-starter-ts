import React from 'react';
import PropTypes from 'prop-types';

import { View, Image } from 'react-native';

import styles from './styles';
import imageCheck from './images/check.png';

const Icon = ({ checkmark, visible }) => {
  const iconStyles = [styles.icon];
  if (visible) {
    iconStyles.push(styles.iconVisible);
  }
  return (
    <View style={iconStyles}>
      {checkmark ? (
        <Image resizeMode='contain' style={styles.checkIcon} source={imageCheck} />
      ) : null}
    </View>
  );
};

Icon.propTypes = {
  checkmark: PropTypes.bool,
  visible: PropTypes.bool,
};

export default Icon;
