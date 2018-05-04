import color from 'color';
import * as React from 'react';
import { Text, TextInput, TextInputProps, TouchableHighlight, View } from 'react-native';

import styles from './styles';

interface InputWithButtonProps extends TextInputProps {
  onPress: () => any;
  buttonText: string;
  editable?: boolean;
  textColor?: string;
}

const InputWithButton = (props: InputWithButtonProps) => {
  const { buttonText, onPress, editable, textColor } = props;

  const underlayColor = color(styles.$buttonBackgroundColorBase).darken(
    styles.$buttonBackgroundColorModifier,
  );

  const containerStyles = [styles.container];
  if (editable === false) {
    containerStyles.push(styles.containerDisabled);
  }

  const buttonTextStyles = [styles.buttonText];
  if (textColor) {
    buttonTextStyles.push({ color: textColor });
  }

  return (
    <View style={styles.container}>
      <TouchableHighlight
        underlayColor={underlayColor.toString()}
        style={styles.buttonContainer}
        onPress={onPress}
      >
        <Text style={buttonTextStyles}>{buttonText}</Text>
      </TouchableHighlight>
      <View style={styles.border} />
      <TextInput style={styles.input} {...props} />
    </View>
  );
};

export default InputWithButton;
