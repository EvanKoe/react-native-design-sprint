import * as React from 'react';
import { FC, useState } from 'react';
import {
  Text,
  StyleSheet,
  StyleProp,
  TextStyle,
  View
} from 'react-native';
import colors from './colors';

interface Props {
  style?: StyleProp<TextStyle>;   // style to be applied on the title
  oofsize?: boolean;              // biggest size
  big?: boolean;                  // big size
  medium?: boolean;               // medium size
  small?: boolean;                // small size
  extraSmall?: boolean;           // XS size
  bold?: boolean;                 // to make the title bold
  font?: string;                  // to add custom font
  children: string;               // text that will be displayed
  size?: number;                  // font size
  color?: string;                 // font color
  right?: boolean;                // make the title floating right
  center?: boolean;               // centers the title
}

const Title: FC<Props> = ({
  style = {},
  oofsize = false,
  big = false,
  medium = false,
  small = false,
  extraSmall = false,
  bold = false,
  font = undefined,
  children = '',
  size = 20,
  color = colors.black,
  right = false,
  center = false
}) => {
  const [fsize, setFsize] = useState(
    oofsize ? 40 :
    big ? 30 :
    medium ? 20 :
    small ? 16 :
    extraSmall ? 12 :
    size
  );
  const styles = StyleSheet.create({
    text: {
      fontFamily: font ? font : '',
      fontSize: fsize,
      fontWeight: bold ? 'bold' : 'normal',
      color: color
    }
  });

  return (
    <View
      style={
        center ? { alignSelf: 'center' } :
        right ? {flexDirection: 'row', justifyContent: 'flex-end'} :
        {flexDirection: 'row', justifyContent: 'flex-start'}
      }
    >
      <Text style={[styles.text, style]}>{ children }</Text>
    </View>
  );
};

export default Title;
