import * as React from 'react';
import { FC, useState } from 'react';
import {
  FlatList,
  StyleProp,
  View,
  ViewStyle,
  Text,
  ListRenderItem
} from 'react-native';
import Clickable from './Clickable';

interface Props {
  list?: any;                              // list of object that will be displayed as dropdown
  title?: string;                         // title that will be displayed on the button
  renderItem?: ListRenderItem<any>;        // function to render each item of the dropdown
  onOpen?: () => void;                    // function to call when dropdown opened
  onClose?: () => void;                   // function to call when dropdown closed
  style?: StyleProp<ViewStyle>;           // style to be applied on the main layout
  listStyle?: StyleProp<ViewStyle>;       // style to be applied on the list
  buttonStyle?: StyleProp<ViewStyle>;     // style to be applied on the dropdown's button
  buttonStyleOnOpen?: StyleProp<ViewStyle>// style to be applied on the button when dropdown's opened
  titleStyle?: StyleProp<ViewStyle>;      // style to be applied on the dropdown's button text
  buttonType?: string;                    // primary/secondary ... button options
}

const DropDown: FC<Props> = ({
  list = [],
  title = 'Dropdown',
  renderItem = (e: any) => <Text>{e}</Text>,
  onOpen = () => undefined,
  onClose = () => undefined,
  style = {},
  listStyle = {},
  buttonStyle = {},
  buttonStyleOnOpen = {},
  titleStyle = {},
  buttonType = 'none'
}) => {
  const [listState, setListState] = useState(false);

  return (
    <View style={style}>
      <Clickable
        primary={(buttonType === 'primary')}
        secondary={(buttonType === 'secondary')}
        disabled={(buttonType === 'disabled')}
        onPress={() => {
          setListState(listState => !listState)
          if (listState && onOpen)
            return onOpen()
          if (!listState && onClose)
            return onClose()
        }}
        style={[
          { marginBottom: 0 },
          listState ? {
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0
          } : {
            borderRadius: 15
          },
          listState ? buttonStyleOnOpen : buttonStyle
        ]}
        textStyle={titleStyle}
        text={title}
      />
      {(listState === true) && (
        <FlatList
          style={listStyle}
          data={list}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

export default DropDown;
