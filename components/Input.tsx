import React, { FC, useState } from 'react';
import {
  TextInput,
  StyleProp,
  ViewStyle,
  TextStyle,
  StyleSheet,
  View
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import colors from '../resources/colors';

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
}

export const Input: FC<Props> = ({
  type = 'text',
  placeholder = 'Input text right there',
  style = {},
  textStyle = {},
  onFinished = () => console.log('You typed something !'),
  onCharTyped = (e: string) => {},
  required = false,
  value = '',
  placeholderColor = colors.grey200,
  noRegex = false,
  disabled = false
}) => {
  const [typedText, setTypedText] = useState('');
  const [borderError, setBorderError] = useState('transparent');

  const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.grey700,
      height: 60,
      borderRadius: 20,
      marginHorizontal: 5,
      marginVertical: 5,
      paddingHorizontal: 30,
      flexDirection: 'row',
      borderWidth: 2,
      borderColor: borderError,
      alignItems: 'center'
    },
    textStyle: {
      fontWeight: 'bold',
      fontSize: 17,
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
        placeholder={placeholder}
        placeholderTextColor={placeholderColor}
        style={[
          styles.textStyle,
          textStyle && textStyle
        ]}
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

      {(borderError === colors.red) && (
        <MaterialIcons name="error-outline" size={24} color="red" />
      )}
    </View>
  );
};