import * as React from 'react';
import { FC, useState } from 'react';
import Clickable from './Clickable';
import Input from './Input';
import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
  StyleProp,
  TextStyle
} from 'react-native';
import colors from './colors';

interface Props {
  title?: string;                              // title text
  titleStyle?: StyleProp<TextStyle>;           // style to be applied to the title
  buttonColor?: string;                        // color for the button
  buttonTextColor?: string;                    // color of the button text
  buttonType?: string;                         // primary/secondary/disabled : Clickable options
  buttonStyle?: StyleProp<ViewStyle>;          // style to be applied to the submit button
  buttonSticky?: string;                       // left/center/right/none : make the button stick horizontally
  buttonShadow?: string;                       // none/right-top ... adds a little shadow under the button (with borders)
  buttonShadowColor?: string;                  // color of the button's shadow
  style?: StyleProp<ViewStyle>;                // style to be applied to the main layout
  onSubmit?: (object: any) => void;            // function called when submit clicked
  shadow?: string;                             // none/left-bottom/right-top ... Displays a cheating shadow made with borders
  shadowColor?: string;                        // color of the shadow
  borderRadius?: number;                       // border radius (in px) for the main layout, inputs and buttons
  placeholderTop?: string;                     // text to be displayed in the top placeholder
  placeholderTopStyle?: StyleProp<TextStyle>;  // style to be applied to the top placeholder
  placeholderBottom?: string;                  // text to be displayed in the bottom placeholder
  placeholderBottomStyle?: StyleProp<TextStyle>// style to be applied to the bottom placeholder
  children?: React.ReactElement;               // any child to be rendered inside
}

const LoginForm: FC<Props> = ({
  title = '',
  titleStyle = {},
  buttonColor = colors.black,
  buttonTextColor = colors.white,
  buttonType = 'primary',
  buttonStyle = {},
  buttonSticky = 'none',
  buttonShadow = 'none',
  buttonShadowColor = colors.grey60,
  style = {},
  shadow = 'none',
  shadowColor = colors.grey60,
  onSubmit = (object: any) => console.log('Form callback missing. Please add one.'),
  borderRadius = 15,
  placeholderTop = 'Email',
  placeholderTopStyle = {},
  placeholderBottom = 'Password',
  placeholderBottomStyle = {},
  children = <></>
}) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.wtransp300,
      marginTop: '25%',
      marginHorizontal: 20,
      paddingHorizontal: 10,
      paddingVertical: 20,
      borderRadius: borderRadius,
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold'
    },
    shadow: {
      borderWidth: 2,
      borderLeftColor: shadow.includes('left') ? shadowColor : colors.transp,
      borderBottomColor: shadow.includes('bottom') ? shadowColor : colors.transp,
      borderTopColor: shadow.includes('top') ? shadowColor : colors.transp,
      borderRightColor: shadow.includes('right') ? shadowColor : colors.transp
    }
  });

  const [mail, setMail] = useState('');
  const [psw, setPsw] = useState('');

  return (
    <View style={[styles.container, styles.shadow, style]}>
      {(title !== '') && (
        <Text style={[styles.title, titleStyle]}> {title} </Text>
      )}
      <Input
        type='email'
        required
        noRegex
        onCharTyped={(e) => setMail(e)}
        style={[{ borderRadius: borderRadius }, placeholderTopStyle]}
        placeholder={placeholderTop}
      />
      <Input
        type='password'
        required
        noRegex
        onCharTyped={(e) => setPsw(e)}
        style={[{ borderRadius: borderRadius }, placeholderBottomStyle]}
        placeholder={placeholderBottom}
      />
      <Clickable
        textStyle={{ color: buttonTextColor }}
        shadow={buttonShadow}
        shadowColor={buttonShadowColor}
        style={[
          buttonSticky === 'left' ? { marginRight: '50%' } :
          buttonSticky === 'right' ? { marginLeft: '50%' } :
          buttonSticky === 'center' ? { marginHorizontal: '25%' } :
          { marginHorizontal: 5 },
          { borderRadius: borderRadius },
          buttonStyle
        ]}
        primary={buttonType === 'primary'}
        secondary={buttonType === 'secondary'}
        disabled={buttonType === 'disabled'}
        primaryColor={buttonColor}
        onPress={() => onSubmit({mail, psw})}
      />
      {children}
    </View>
  )
};

export default LoginForm;
