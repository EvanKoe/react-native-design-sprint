import { StatusBar } from 'expo-status-bar';
import React, { useRef } from 'react';
import { StyleSheet, Text, SafeAreaView, FlatList, ScrollView, View } from 'react-native';
import { Clickable } from './components/Clickable';
import { Input } from './components/Input';
import { LoginForm } from './components/Form';
import { Layout } from './components/Layout';
import colors from './resources/colors';
import { Spacer } from './components/Spacer';
import { Avatar } from './components/Avatar';
import { DropDown } from './components/DropDown';

import RBSheet from "react-native-raw-bottom-sheet";

const App = () => {
  const slider = useRef();

  return (
    <Layout title='Welcome' dark>
      <View style={{ flexDirection: 'row' }}>
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
          imageUrl="https://cdn.alzashop.com/ImgW.ashx?fd=f16&cd=GMERCHb613do1"
          size={150}
        />
      </View>
      <DropDown
        list={list}
        renderItem={(item) => {
          return (<Text style={styles.dropdownItem}> {item.item.title} </Text>)
        }}
        title='Open dropdown list !'
        listStyle={{ marginHorizontal: 5 }}
      />
      <Clickable
        callback={() => slider.current.open()}
        text='Open bottom slider'
        icon='caretup'
      />
      <RBSheet
        ref={slider}
        closeOnDragDown={true}
        customStyles={{
          container: {
            backgroundColor: colors.grey800,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            padding: 5
          }
        }}
        height={500}
      >
        <Text> Hi ! </Text>
        <Text> This is a bottom slider. Drag it down to close it ! </Text>
      </RBSheet>
    </Layout>
  );
;}

const list = [
  {title: 'bwi'},
  {title: 'test'},
  {title: 'bonjour'},
  {title: 'A'},
  {title: 'azertyuiopqsdfghkjlmwxcvbn'}
]

const styles = StyleSheet.create({
  dropdownItem: {
    paddingVertical: 5,
    backgroundColor: colors.grey800,
    paddingHorizontal: 20,
    color: colors.red700,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default App;