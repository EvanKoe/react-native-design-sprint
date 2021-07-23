import React, { Component, FC, useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  TextStyle,
  ViewStyle,
  StyleProp,
  Text
} from 'react-native';
import colors from '../resources/colors';

interface Props {
  dark?: boolean;                       // enables dark mode (dark background, light font color...)
  title?: string;                       // displays a big string as title
  titleStyle?: StyleProp<TextStyle>;    // style to be applied to the title
  titleSize?: number;                   // size of the title (can also be made with titleStyle)
  style?: StyleProp<ViewStyle>;         // style to be applied on the main layout
  children?: any;                       // components inside the layout
};

export const Layout: FC<Props> = ({
  dark = false,
  title = '',
  titleStyle = {},
  titleSize = 50,
  style = {},
  children = {}
}) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: dark ? colors.dark : colors.grey800,
      flex: 1,
      paddingTop: 30
    },
    title: {
      color: dark ? colors.white : colors.black,
      fontWeight: 'bold',
      fontSize: titleSize
    }
  });

  return (
    <View style={[styles.container, style]}>
      {(title !== '') && (
        <Text style={[styles.title, titleStyle]}> {title} </Text>
      )}
      {(children !== undefined) && children}
    </View>
  );
};