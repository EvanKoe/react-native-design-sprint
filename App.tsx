import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, FlatList, ScrollView, View } from 'react-native';
import { Clickable } from './components/Clickable';
import { Input } from './components/Input';
import { LoginForm } from './components/Form';
import colors from './resources/colors';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LoginForm
        title='Log in'
        titleStyle={{ paddingBottom: 20 }}
        buttonType='primary'
        buttonColor={colors.salmon}
        buttonStyle={{ borderRadius: 15, paddingVertical: 15 }}
        buttonSticky='right'
        buttonShadow
      />
    </SafeAreaView>
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
