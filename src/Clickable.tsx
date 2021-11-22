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
  /** buttonStyle: primary (using primaryColor) */
  primary?: boolean;                            // buttonStyle : primary
  /** buttonStyle: secondary */
  secondary?: boolean;                          // buttonStyle : secondary
  /** make button not clickable */
  disabled?: boolean;                           // make the button not clickable
  /** precise a color which the button will be built on */
  primaryColor?: string;                        // precise a color which the button will be built on
  /** function to be called on button pressed */
  onPress?: (e: GestureResponderEvent) => void; // function to call when clicked
  /** style to be applied on the button text */
  textStyle?: StyleProp<TextStyle>;             // style to be applied on the button text
  /** style to be applied on the button icon */
  iconStyle?: StyleProp<TextStyle>;             // style to be applied on the button icon
  /** style to be applied on the main layout */
  style?: StyleProp<ViewStyle>;                 // style to be applied on the main layout
  /** icon name (AntDesign only. If not, pass through children) */
  icon?: string | boolean;                      // icon name (AntDesign only)
  /** icon size (px) */
  iconSize?: number;                            // icon size (px)
  /** icon color (string) */
  iconColor?: string;                           // icon color
  /** text to be displayed in the button */
  text?: string;                                // text to be displayed in the button
  /** none/left-right... display a little shadow (with border) */
  shadow?: string;                              // none/left-right... Displays a little shadow (with border)
  /** color of the shadow (if shadow) */
  shadowColor?: string;                         // color of the shadow (if shadow)
  /** image to be rendered */
  imageUrl?: string;                            // image to be rendered
  /** image height */
  imageHeight?: number;                         // image's height
  /** image width */
  imageWidth?: number;                          // image's width
  /** image style */
  imageStyle?: StyleProp<ImageStyle>            // image's style
  /** any component to be rendered (especially if you want to use non-AntDesign icons) */
  children?: any                                // any component to be rendered (if you wanna render non-Antdesign icons)
  /** Remove background color : make it transparent */
  transparentBackground?: boolean               // removes backgroundColor
}

const Clickable: FC<Props> = ({
  primary = false,
  secondary = false,
  disabled = false,
  primaryColor = colors.red700,
  onPress = (e: GestureResponderEvent) => log('You clicked here !'),
  textStyle = {},
  iconStyle = {},
  style = {},
  icon = false,
  children = <></>,
  iconSize = 24,
  iconColor = colors.black,
  imageUrl = '',
  text = (imageUrl === '' ? undefined : ''),
  shadow = 'none',
  shadowColor = colors.grey60,
  imageHeight = 40,
  imageWidth = 40,
  imageStyle = {},
  transparentBackground = false
}) => {
  const styles = StyleSheet.create({
    secondaryTouchable: {
      backgroundColor: colors.grey800,
      borderColor: primaryColor,
      borderWidth: 1
    },
    container: {
      borderRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 20,
      marginVertical: 5,
      marginHorizontal: 5,
      backgroundColor: transparentBackground ? colors.transp : colors.grey800,
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
        {text !== undefined && (
          <Text
            style={[
              styles.textStyle,
              disabled && {color: colors.grey200},
              primary && {color: colors.white},
              secondary && {color: primaryColor},
              textStyle
            ]}
          >{text}</Text>
        )}
        {children}
      </View>
    </TouchableOpacity>
  );
};

export { Clickable };
