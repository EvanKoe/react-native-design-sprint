import React, { FC, useState } from 'react';
import { Text, View, Image, StyleSheet, StyleProp, ViewStyle } from 'react-native'
import colors from '../resources/colors';

interface Props {
  image?: string;       // profile pic
  text?: string;        // user's name so we can use its first letter as an image
  connected?: string;   // green if 'connected', red if 'none', grey if 'busy'
  size?: number;        // size of the image
};

export const Avatar: FC<Props> = ({
  image = 'none',
  text = 'user',
  connected = 'none',
  size = 100,
}) => {
  const styles = StyleSheet.create({
    container: {
      height: size,
      width: size,
      borderRadius: 50
    },
    capital: {
      borderRadius: 50,
      fontSize: size * 2 / 3,
      color: colors.white,
      fontWeight: 'bold',
      textAlignVertical: 'center',
      textAlign: 'center'
    },
    pp: {
      borderRadius: 50,
      height: size,
      width: size
    }
  });

  return (
    <View style={styles.container}>
      {(image !== 'none' && image.includes('http')) && (
        <Image source={{ uri: image }} style={styles.pp} />
      )}
      {(image === 'none') && (
        <Text
          style={[
            connected === 'none' && { backgroundColor: colors.fadeRed },
            connected === 'connected' && { backgroundColor: colors.fadeGreen },
            connected === 'busy' && { backgroundColor: colors.grey700 },
            styles.capital
          ]}
        > {text[0]} </Text>
      )}
    </View>
  );
};