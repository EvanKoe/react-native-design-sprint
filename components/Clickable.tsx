import React, { FC, useEffect, useState } from 'react';
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
import colors from '../resources/colors';

interface Props {
  primary?: boolean;
  secondary?: boolean;
  disabled?: boolean;

  primaryColor?: string;
  callback?: () => void;
  textStyle?: StyleProp<TextStyle>;
  iconStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
  icon?: any;
  iconSize?: number;
  iconColor?: string;
  text?: string;
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
  iconColor = 'empty',
  text = 'Click here',
}) => {
  const styles = StyleSheet.create({
    secondaryTouchable: {
      backgroundColor: colors.grey800,
      borderColor: primaryColor,
      borderWidth: 2
    },
    container: {
      borderRadius: 12,
      paddingVertical: 10,
      paddingHorizontal: 20,
      marginVertical: 5
    },
    textStyle: {
      alignSelf: 'center',
      fontWeight: 'bold'
    }
  });

  const [iconFColor, setIconColor] = useState('');

  useEffect(() => {
    setIconColor(colors.black);
    if (iconColor !== 'empty')
      setIconColor(iconColor);
    else {
      if (primary)
        setIconColor(colors.white);
      else if (secondary)
        setIconColor(primaryColor);
      else if (disabled)
        setIconColor(colors.grey100);
    }
  }, []);

  console.log(primary, secondary, disabled, '\n')

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
          style
        ]}
      >
        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
          <AntDesign
            name={icon}
            size={iconSize}
            color={iconFColor}
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