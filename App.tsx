import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Avatar, Clickable, DropDown, LoginForm, Input } from './index';

export default function App() {
  return (
    <View style={styles.container}>
      <Input />
    </View>
  );
}

const f = ["premier", "deuxième", "troisième"];

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
