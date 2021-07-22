import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, FlatList, ScrollView, View } from 'react-native';
import { Clickable } from './components/Clickable';
import { Input } from './components/Input';
import colors from './resources/colors';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}> Clickable </Text>
      <View style={{ height: '10%' }}>
        <ScrollView horizontal>
          <Clickable primary primaryColor={colors.red700} text='Primary'/>
          <Clickable secondary primaryColor={colors.red700} text='Secondary'/>
          <Clickable disabled text='Disabled' />
          <Clickable text='default' />
        </ScrollView>
      </View>
      <Text style={styles.title}> Input </Text>
      <View style={{ height: '10%' }}>
      <Input required placeholder='required field' />
      <Input type='email' placeholder='email field' />
      <Input placeholder='custom styled field' style={{
          backgroundColor: colors.red700,
          borderWidth: 2,
          borderColor: colors.grey25,
          borderRadius: 5
        }}
        placeholderColor={colors.grey25}
        textStyle={{ color: colors.grey900 }}
      />
      <Input type='password' placeholder='password'/>
      </View>
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
