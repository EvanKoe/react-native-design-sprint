import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, FlatList, ScrollView, View } from 'react-native';
import { Clickable } from './components/Clickable';
import { Input } from './components/Input';
import { LoginForm } from './components/Form';
import { Layout } from './components/Layout';
import colors from './resources/colors';
import { Spacer } from './components/Spacer';
import { Avatar } from './components/Avatar';
import { DropDown } from './components/DropDown';

const App = () => {
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
        title='Click here !'
        buttonStyle={{ color: colors.white }}
      />
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
    backgroundColor: colors.greyBlueDark,
    paddingHorizontal: 20,
    color: colors.grey900,
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default App;