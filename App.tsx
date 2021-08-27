import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Clickable, colors, log, LoginForm } from './index';

export default function App() {
  return (
    <LoginForm
      style={styles.login}
      title="Log in"
      titleStyle={{ color: colors.white }}
      buttonStyle={{ backgroundColor: colors.white }}
      buttonTextColor={colors.fadeBlueDark}
      onSubmit={() => log('Logging in...')}
    >
      <Clickable
        style={styles.button}
        imageUrl='https://picsum.photos/200'
        imageStyle={{ borderRadius: 15 }}
      />
    </LoginForm>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.blue
  },
  container: {
    flex: 1,
    backgroundColor: colors.grey50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  login: {
    backgroundColor: colors.fadeBlueDark
  }
});
