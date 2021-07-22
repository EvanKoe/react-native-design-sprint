import React, { FC, useState, useEffect } from 'react';
import {
  TextInput,
  Text,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle,
  StyleSheet,
  View
} from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import colors from '../resources/colors';
import { onFinishCommand } from 'yargs';

interface Props {
  type?: string;
  placeholder?: string;
  placeholderColor: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  onFinished?: () => void;
  onCharTyped?: () => void;
  required?: boolean;
  value?: string;
}

export const Input = ({
  type = 'text',
  placeholder = 'Input text right there',
  style = {},
  textStyle = {},
  onFinished = (e: string) => console.log('You typed something !'),
  onCharTyped = (e: string) => {},
  required = false,
  value = '',
  placeholderColor = colors.grey200
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
          if (required && typedText === '')
            return setBorderError(colors.red);
          if (type === 'email') {
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