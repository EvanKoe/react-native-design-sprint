import React, { FC, useEffect, useState } from 'react';
import {
  Text,
  TouchableOpacity,
  Image,
  View,
  StyleSheet,
  ViewStyle,
  StyleProp,
  TextStyle,
  GestureResponderEvent,
  ImageStyle
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import colors from './colors';
import { log } from './functions';

interface Props {
  primary?: boolean;                            // buttonStyle : primary
  secondary?: boolean;                          // buttonStyle : secondary
  disabled?: boolean;                           // make the button not clickable

  primaryColor?: string;                        // precise a color which the button will be built on
  onPress?: (e: GestureResponderEvent) => void; // function to call when clicked
  textStyle?: StyleProp<TextStyle>;             // style to be applied on the button text
  iconStyle?: StyleProp<TextStyle>;             // style to be applied on the button icon
  style?: StyleProp<ViewStyle>;                 // style to be applied on the main layout
  icon?: string | boolean;                      // icon name (AntDesign)
  iconSize?: number;                            // icon size (px)
  iconColor?: string;                           // icon color
  text?: string;                                // text to be displayed in the button
  shadow?: string;                              // none/left-right... Displays a little shadow (with border)
  shadowColor?: string;                         // color of the shadow (if shadow)
  imageUrl?: string;                            // image to be rendered
  imageHeight?: number;                         // image's height
  imageWidth?: number;                          // image's width
  imageStyle?: StyleProp<ImageStyle>             // image's style
}

export const Clickable: FC<Props> = ({
  primary = false,
  secondary = false,
  disabled = false,
  primaryColor = colors.red700,
  onPress = (e: GestureResponderEvent) => log('You clicked here !'),
  textStyle = {},
  iconStyle = {},
  style = {},
  icon = false,
  iconSize = 24,
  iconColor = colors.black,
  imageUrl = '',
  text = (imageUrl === '' ? 'Click here' : ''),
  shadow = 'none',
  shadowColor = colors.grey60,
  imageHeight = 40,
  imageWidth = 40,
  imageStyle = {}
}) => {
  const styles = StyleSheet.create({
    secondaryTouchable: {
      backgroundColor: colors.grey800,
      borderColor: primaryColor,
      borderWidth: 2
    },
    container: {
      borderRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 20,
      marginVertical: 5,
      marginHorizontal: 5,
      backgroundColor: colors.grey800,
      justifyContent: 'center',
      alignContent: 'center'
    },
    textStyle: {
      color: colors.black,
      alignSelf: 'center',
      fontWeight: 'bold'
    },
    shadow: {
      borderWidth: 2,
      borderLeftColor: (shadow.includes('left') || shadow.includes('all')) ? shadowColor : colors.transp,
      borderBottomColor: (shadow.includes('bottom') || shadow.includes('all')) ? shadowColor : colors.transp,
      borderRightColor: (shadow.includes('right') || shadow.includes('all')) ? shadowColor : colors.transp,
      borderTopColor: (shadow.includes('top') || shadow.includes('all')) ? shadowColor : colors.transp
    }
  });

  return (
    <>
      <TouchableOpacity
        onPress={(e) => onPress(e)}
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
          {icon !== false && (
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
          )}
          {imageUrl !== '' && (
            <Image
              source={{ uri: imageUrl }}
              style={[
                {
                  width: imageWidth,
                  height: imageHeight
                },
                imageStyle
              ]}
            />
          )}
          <Text
            style={[
              styles.textStyle,
              disabled && {color: colors.grey200},
              primary && {color: colors.white},
              secondary && {color: primaryColor},
              textStyle
            ]}
          >{text}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};
