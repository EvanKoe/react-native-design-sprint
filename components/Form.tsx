import React, { FC, useEffect, useState } from 'react';
import { Clickable } from './Clickable';
import { Input } from './Input';
import { View, Text, StyleSheet, ViewStyle, StyleProp, TextStyle } from 'react-native';
import colors from '../resources/colors';

interface Props {
  title?: string;                           // title text
  titleStyle?: StyleProp<TextStyle>;        // style to be applied to the title
  buttonColor?: string;                     // color for the button
  buttonType?: string;                      // primary/secondary/disabled : Clickable options
  buttonStyle?: StyleProp<ViewStyle>;       // style to be applied to the submit button
  buttonSticky?: string;                    // left/center/right/none : make the button stick horizontally
  buttonShadow?: boolean;                   // adds a little shadow under the button (with borders)
  style?: StyleProp<ViewStyle>;             // style to be applied to the main layout
  callback?: (object: any) => void;         // function called when submit clicked
}

export const LoginForm: FC<Props> = ({
  title = '',
  titleStyle = {},
  buttonColor = colors.black,
  buttonType = 'primary',
  buttonStyle = {},
  buttonSticky = 'none',
  buttonShadow = false,
  style = {},
  callback = (object: any) => console.log('Form callback missing. Please add one.')
}) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.wtransp300,
      marginTop: '25%',
      marginHorizontal: 20,
      paddingHorizontal: 10,
      paddingVertical: 20,
      borderRadius: 15,
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold'
    },
    shadow: {
      borderLeftColor: colors.grey60,
      borderLeftWidth: 2,
      borderBottomColor: colors.grey60,
      borderBottomWidth: 2
    }

  });

  const [mail, setMail] = useState('');
  const [psw, setPsw] = useState('');

  return (
    <View style={{backgroundColor: colors.salmonDark, flex: 1}}>
      <View style={[styles.container, styles.shadow, style]}>
        {(title !== '') && (
          <Text style={[styles.title, titleStyle]}> {title} </Text>
        )}
        <Input type='email' required noRegex onCharTyped={(e) => setMail(e)} />
        <Input type='password' required noRegex onCharTyped={(e) => setPsw(e)} />
        <Clickable
          shadow={buttonShadow}
          style={[
            buttonSticky === 'left' ? { marginRight: '50%' } :
            buttonSticky === 'right' ? { marginLeft: '50%' } :
            buttonSticky === 'center' ? { marginHorizontal: '25%' } :
            { marginHorizontal: 5 },
            buttonStyle
          ]}
          primary={buttonType === 'primary'}
          secondary={buttonType === 'secondary'}
          disabled={buttonType === 'disabled'}
          primaryColor={buttonColor}
          callback={() => callback({mail, psw})}
        />
      </View>
    </View>
  )
};