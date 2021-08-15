import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Clickable, colors, log } from './index';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ color: '#fff' }}>Open up App.tsx to start working on your app!</Text>
      <Clickable
        text='Button'
        shadow='all'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grey50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
