import React, { FC, useState } from 'react';
import { Text, FlatList, TouchableOpacity, StyleSheet, StyleProp, View, ViewStyle } from 'react-native';
import colors from '../resources/colors';
import { Clickable } from './Clickable';


interface Props {
  list: any;                         // list of object that will be displayed as dropdown
  title?: string;                     // title that will be displayed on the button
  renderItem: (e: any) => void;       // function to render each item of the dropdown
  style?: StyleProp<ViewStyle>;        // style to be applied on the main layout
  listStyle?: StyleProp<ViewStyle>;    // style to be applied on the list
  buttonStyle?: StyleProp<ViewStyle>;  // style to be applied on the dropdown's button
  titleStyle?: StyleProp<ViewStyle>;  // style to be applied on the dropdown's button text
}

export const DropDown: FC<Props> = ({
  list = {},
  title = 'Dropdown',
  renderItem = (e: any) => {console.log('Lol you forgot the renderItem function')},
  style = {},
  listStyle = {},
  buttonStyle = {},
  titleStyle = {}
}) => {
  const [listState, setListState] = useState(false);

  const styles = StyleSheet.create({
    container: {
      display: (listState ? 'flex' : 'none')
    }
  });

  return (
    <View style={style}>
      <Clickable
        secondary
        callback={() => setListState(listState => !listState)}
        style={buttonStyle}
        textStyle={titleStyle}
        text={title}
      />
      {(listState === true) && (
        <FlatList
          style={listStyle}
          data={list}
          renderItem={(item) => renderItem(item)}
        />
      )}
    </View>
  );
};

