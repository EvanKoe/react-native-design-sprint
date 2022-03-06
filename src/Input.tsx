import * as React from 'react';
import { FC, useState } from 'react';
import {
  TextInput,
  StyleProp,
  ViewStyle,
  TextStyle,
  StyleSheet,
  View
} from 'react-native';
import colors from './colors';
import { log } from './functions';

interface Props {
  type?: string;                          // type : email, password, text...
  placeholder?: string;                   // placeholder : text displayed when no text
  placeholderColor?: string;              // color of placeholder
  style?: StyleProp<ViewStyle>;           // style to be applied to main view
  textStyle?: StyleProp<TextStyle>;       // style to be applied to text (not placeholder)
  onFinished?: () => void;                // function to call when user finished typing
  onCharTyped?: (e: string) => void;      // function to call when a letter is typed
  required?: boolean;                     // same as HTML5
  value?: string;                         // text to be put by default
  noRegex?: boolean;                      // email : does not display an error if no '@'
  disabled?: boolean;                     // disables the input
  onFocus?: () => void;                   // function to be executed when focus gained
}

const Input: FC<Props> = ({
  type = 'text',
  placeholder = 'Input text right there',
  style = {},
  textStyle = {},
  onFinished = (e: string) => log(e),
  onCharTyped = (e: string) => {},
  required = false,
  value = '',
  disabled = false,
  placeholderColor = disabled ? colors.grey400 : colors.grey200,
  noRegex = false,
  onFocus = () => {}
}) => {
  const [typedText, setTypedText] = useState('');
  const [borderError, setBorderError] = useState('transparent');

  const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.grey700,
      height: 50,
      borderRadius: 7,
      marginHorizontal: 3,
      marginVertical: 5,
      paddingHorizontal: 30,
      flexDirection: 'row',
      borderWidth: 2,
      borderColor: borderError,
      alignItems: 'center'
    },
    textStyle: {
      fontSize: 15,
      color: colors.black,
      flex: 1
    },
    crossIcon: {
    }
  });

  return (
    <View style={[
      styles.container,
      style && style
    ]}>
      <TextInput
        editable={!disabled}
        onFocus={onFocus}
        placeholder={placeholder}
        placeholderTextColor={placeholderColor}
        style={[
          styles.textStyle,
          textStyle && textStyle
        ]}
        value={value}
        secureTextEntry={type === 'password'}
        onChangeText={(text) => {
          setTypedText(text);
          return onCharTyped(text);
        }}
        onEndEditing={() => {
          setBorderError('transparent');
          if (!noRegex && required && typedText === '')
            return setBorderError(colors.red);
          if (type === 'email' && !noRegex) {
            setBorderError((!typedText || !/^\S+@\S+\.\S+$/.test(typedText)) ?
              colors.red : 'transparent'
            );
          }
          onFinished(typedText)
        }}
      />
    </View>
  );
};

export default Input;
