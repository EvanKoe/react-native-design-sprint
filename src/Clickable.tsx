import React, { FC, useState } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ViewStyle,
  StyleProp,
  TextStyle
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import colors from './colors';

interface Props {
  primary?: boolean;                  // buttonStyle : primary
  secondary?: boolean;                // buttonStyle : secondary
  disabled?: boolean;                 // make the button not clickable

  primaryColor?: string;              // precise a color which the button will be built on
  callback?: () => void;              // function to call when clicked
  textStyle?: StyleProp<TextStyle>;   // style to be applied on the button text
  iconStyle?: StyleProp<TextStyle>;   // style to be applied on the button icon
  style?: StyleProp<ViewStyle>;       // style to be applied on the main layout
  icon?: any;                         // icon name (AntDesign)
  iconSize?: number;                  // icon size (px)
  iconColor?: string;                 // icon color
  text?: string;                      // text to be displayed in the button
  shadow?: string;                    // none/left-right... Displays a little cheated shadow (with border)
  shadowColor?: string;               // color of the shadow (if shadow)
}

export const Clickable: FC<Props> = ({
  primary = false,
  secondary = false,
  disabled = false,
  primaryColor = colors.red700,
  callback = () => console.log('You clicked here !'),
  textStyle = {},
  iconStyle = {},
  style = {},
  icon = 'codesquareo',
  iconSize = 24,
  iconColor = colors.black,
  text = 'Click here',
  shadow = 'none',
  shadowColor = colors.grey60
}) => {
  const [iconFColor, setIconColor] = useState('');

  const styles = StyleSheet.create({
    secondaryTouchable: {
      backgroundColor: colors.grey800,
      borderColor: primaryColor,
      borderWidth: 2
    },
    container: {
      borderRadius: 20,
      paddingVertical: 10,
      paddingHorizontal: 20,
      marginVertical: 5,
      marginHorizontal: 5,
      backgroundColor: colors.grey800,
      justifyContent: 'center',
      alignContent: 'center'
    },
    textStyle: {
      alignSelf: 'center',
      fontWeight: 'bold'
    },
    shadow: {
      borderWidth: 2,
      borderLeftColor: shadow.includes('left') ? shadowColor : colors.transp,
      borderBottomColor: shadow.includes('bottom') ? shadowColor : colors.transp,
      borderRightColor: shadow.includes('right') ? shadowColor : colors.transp,
      borderTopColor: shadow.includes('top') ? shadowColor : colors.transp
    }
  });

  return (
    <>
      <TouchableOpacity
        onPress={() => callback()}
        disabled={disabled}
        style={[
          styles.container,
          primary && {backgroundColor: primaryColor},
          secondary && styles.secondaryTouchable,
          disabled && {backgroundColor: colors.grey700},
          shadow !== 'none' && styles.shadow,
          style && style
        ]}
      >
        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
          <AntDesign
            name={icon}
            size={iconSize}
            color={
              primary ? colors.white :
              secondary ? primaryColor :
              disabled ? colors.grey100 :
              iconColor ? iconColor :
              colors.black
            }
            style={[
              styles.textStyle,
              iconStyle
            ]}
          />
          <Text
            style={[
              styles.textStyle,
              disabled && {color: colors.grey200},
              primary && {color: colors.white},
              secondary && {color: primaryColor},
              textStyle
            ]}
          > {text} </Text>
        </View>
      </TouchableOpacity>
    </>
  );
};