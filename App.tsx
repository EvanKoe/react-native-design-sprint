import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { Clickable } from './components/Clickable';
import colors from './resources/colors';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Clickable primary primaryColor={colors.red700} text='Primary'/>
      <Clickable secondary primaryColor={colors.red700} text='Secondary'/>
      <Clickable disabled text='Disabled' />
      <Clickable text='default' />
    </SafeAreaView>
  );
;}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
});
