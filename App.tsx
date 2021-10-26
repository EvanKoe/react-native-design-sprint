import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, SlidingPanel } from './index';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#212121' }}>
      <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#ddd' }}> Sample App </Text>
      <SlidingPanel>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
        <Text>Hello </Text>
      </SlidingPanel>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});
