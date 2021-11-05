import React, { FC, useState } from 'react';
import { Text, View, Image, StyleSheet, StyleProp, ViewStyle } from 'react-native'
import colors from './colors';

interface Props {
  imageUrl?: string;          // profile pic (url of the image)
  text?: string;              // user's name so we can use its first letter as an image
  connected?: string;         // green if 'connected', red if 'none', grey if 'busy'
  size?: number;              // size of the image
  style?: StyleProp<ViewStyle>// style to be applied to the main layout
  backgroundColor?: string    // background color
};

const Avatar: FC<Props> = ({
  imageUrl = 'none',
  text = 'user',
  connected = 'none',
  size = 100,
  style = {},
  backgroundColor = 'none'
}) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.blue,
      borderRadius: 1000,
      height : size,
      width: size
    },
    capital: {
      fontSize: size * 6 / 10,
      color: colors.white,
      fontWeight: 'bold',
      textAlign: 'center'
    },
    pp: {
      borderRadius: 1000,
      height: size,
      width: size
    }
  });

  return (
    <View style={[styles.container,
        connected === 'none' && { backgroundColor: colors.fadeRedDark },
        connected === 'connected' && { backgroundColor: colors.fadeGreenDark },
        connected === 'busy' && { backgroundColor: colors.grey600 },
        backgroundColor !== 'none' && { backgroundColor: backgroundColor },
        style
      ]}>
      {(imageUrl !== 'none' && imageUrl.includes('http')) && (
        <Image source={{ uri: imageUrl }} style={styles.pp} />
      )}
      {(imageUrl === 'none') && (
        <Text style={styles.capital}> {text[0]} </Text>
      )}
    </View>
  );
};

export { Avatar };
