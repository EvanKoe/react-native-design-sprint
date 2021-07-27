import React, { Component, FC, useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  TextStyle,
  ViewStyle,
  StyleProp,
  Text,
  ScrollView
} from 'react-native';
import colors from './colors';
import { Title } from './Title';

interface Props {
  dark?: boolean;                       // enables dark mode (dark background, light font color...)
  title?: string;                       // displays a big string as title
  titleStyle?: StyleProp<TextStyle>;    // style to be applied to the title
  titleColor?: string;                  // color to be set on title (less priority than titleStyle)
  titleSize?: number;                   // size of the title (can also be made with titleStyle)
  style?: StyleProp<ViewStyle>;         // style to be applied on the main layout
  children?: any;                       // components inside the layout
  scrollable?: boolean;                 // set the scrollable state for the layout
  backgroundColor?: string;             // set a custom background color
};

export const Layout: FC<Props> = ({
  dark = false,
  title = '',
  titleStyle = {},
  titleSize = 50,
  titleColor = colors.black,
  style = {},
  children = undefined,
  scrollable = false,
  backgroundColor = dark ? colors.dark : colors.grey800
}) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: backgroundColor,
      flex: 1,
      height: '100%'
    },
    title: {
      fontWeight: 'bold',
      fontSize: titleSize
    }
  });

  return (
    <ScrollView scrollEnabled={scrollable} style={[{ height: '100%' }, styles.container, style]} >
      {(title !== '') && (
        <Title oofsize style={[styles.title, titleStyle]} color={titleColor}> {title} </Title>
      )}
      {(children !== undefined) && children}
    </ScrollView>
  );
};