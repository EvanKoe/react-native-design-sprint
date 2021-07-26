import { StatusBar } from 'expo-status-bar';
import React, { useRef } from 'react';
import { StyleSheet, Text, SafeAreaView, FlatList, ScrollView, View, ToastAndroid } from 'react-native';
import { Clickable } from './components/Clickable';
import { Input } from './components/Input';
import { LoginForm } from './components/Form';
import { Layout } from './components/Layout';
import colors from './resources/colors';
import { Spacer } from './components/Spacer';
import { Avatar } from './components/Avatar';
import { DropDown } from './components/DropDown';
import { Title } from './components/Title';
import RBSheet from "react-native-raw-bottom-sheet";
import { LinearGradient } from 'expo-linear-gradient';

const App = () => {
  const slider = useRef();

  const toast = (str: string) => {
    ToastAndroid.showWithGravity(
      str,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  }

  return (
    <Layout
      scrollable
      title='Welcome'
      titleColor={colors.white}
      style={{ paddingTop: 15 }}
      backgroundColor={colors.fadeBlueDark}
    >
      <Title medium color={colors.white} bold> Avatars </Title>
      <View style={{ flexDirection: 'row', paddingHorizontal: 10 }}>
        <Avatar
          text='Evan Koehler'
          connected='connected'
          size={50}
        />
        <Avatar
          text='Philippe'
          size={70}
        />
        <Avatar
          text='Charles'
          connected='busy'
        />
        <Avatar
          text='Evan Koehler'
          imageUrl="https://www.seekpng.com/png/full/41-410093_circled-user-icon-user-profile-icon-png.png"
          size={150}
        />
      </View>
      <Title medium color={colors.white} bold> Dropdown List </Title>
      <DropDown
        list={list}
        renderItem={(item) => {
          return (<Text style={styles.dropdownItem}> {item.item.title} </Text>)
        }}
        title='Open dropdown list !'
        listStyle={styles.listStyle}
        buttonStyle={{ borderRadius: 5 }}
        buttonStyleOnOpen={styles.buttonStyleOnOpen}
      />
      <Title medium color={colors.white} bold> Buttons </Title>
      <Clickable
        callback={() => slider.current.open()}
        text='Click here to see the buttons'
        style={{ borderRadius: 5 }}
        icon='caretup'
      />
      <RBSheet
        ref={slider}
        closeOnDragDown={true}
        customStyles={{
          container: {
            backgroundColor: colors.grey750,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            padding: 5
          }
        }}
        height={250}
      >
        <Title big bold> Buttons </Title>
        <ScrollView horizontal style={styles.buttonScrollView} showsHorizontalScrollIndicator={false} >
          <Clickable primary text='Primary' icon='infocirlceo'/>
          <Clickable secondary text='Secondary' icon='exclamationcircleo'/>
          <Clickable text='Unstyled' icon='questioncircleo'/>
          <Clickable disabled text='Disabled' icon='closecircleo'/>
        </ScrollView>
        <ScrollView horizontal style={styles.buttonScrollView} showsHorizontalScrollIndicator={false} >
          <Clickable text='Shadowed' shadow='left-bottom' icon='swap' shadowColor={colors.black}/>
          <Clickable text='Shadowed' shadow='right-top' icon='swap' shadowColor={colors.black}/>
          <Clickable text='Shadowed' shadow='right-top' icon='swap' shadowColor={colors.orange}/>
          <Clickable text='Shadowed' shadow='right-top' icon='swap' shadowColor={colors.pink}/>
        </ScrollView>
      </RBSheet>
      <Title medium color={colors.white} bold> Titles </Title>
      <View style={styles.titles}>
        <Title oofsize center color={colors.red700}>OofSize red title</Title>
        <Title center big bold>Big bold title</Title>
        <Title medium center>Medium title</Title>
        <Title small center bold>Small bold title</Title>
        <Title center extraSmall right>Extra small title</Title>
      </View>
    </Layout>
  );
;}

const list = [
  {title: 'Item 1'},
  {title: 'Item 2'},
  {title: 'Item 3'},
  {title: 'Item 4'},
  {title: 'Item 5'}
]

const styles = StyleSheet.create({
  dropdownItem: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    color: colors.red700,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  buttonScrollView: {
    marginHorizontal: 5
  },
  listStyle: {
    backgroundColor: colors.grey700,
    marginHorizontal: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  titles: {
    backgroundColor: colors.wtransp700,
    borderRadius: 5,
    marginHorizontal: 5,
    paddingVertical: 15
  },
  buttonStyleOnOpen: {
    borderRadius: 5,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  }
});

export default App;