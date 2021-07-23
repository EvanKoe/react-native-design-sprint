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

const App = () => {
  return (
    <Layout title='Welcome' dark>
      <View style={{ flexDirection: 'row' }}>
        <Avatar
          text='Evan Koehler'
          connected='connected'
        />
        <Avatar
          text='Charles'
          connected='busy'
        />
        <Avatar
          text='Evan Koehler'
          image="https://cdn.alzashop.com/ImgW.ashx?fd=f16&cd=GMERCHb613do1"
        />
        <Avatar
          text='Philippe'
        />
      </View>
    </Layout>
  );
;}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grey900
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20
  }
});
