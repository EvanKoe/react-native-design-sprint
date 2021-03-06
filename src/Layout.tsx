import * as React from 'react';
import { FC } from 'react';
import {
  StyleSheet,
  TextStyle,
  ViewStyle,
  StyleProp,
  ScrollView
} from 'react-native';
import colors from './colors';
import Title from './Title';

interface Props {
  dark?: boolean;                       // enables dark mode (dark background, light font color...)
  title?: string;                       // displays a big string as title
  titleStyle?: StyleProp<TextStyle>;    // style to be applied to the title
  titleColor?: string;                  // color to be set on title (less priority than titleStyle)
  titleSize?: number;                   // size of the title (can also be made with titleStyle)
  style?: StyleProp<ViewStyle>;         // style to be applied on the main layout
  children?: React.ReactElement;        // components inside the layout
  scrollable?: boolean;                 // set the scrollable state for the layout
  backgroundColor?: string;             // set a custom background color
};

const Layout: FC<Props> = ({
  dark = false,
  title = '',
  titleStyle = {},
  titleSize = 50,
  titleColor = colors.black,
  style = {},
  children = <></>,
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
      {title !== '' && (
        <Title oofsize style={[styles.title, titleStyle]} color={titleColor}>{ title }</Title>
      )}
      { children }
    </ScrollView>
  );
};

export default Layout;
