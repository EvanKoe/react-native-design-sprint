import { StyleSheet, View, Text } from 'react-native';
import { Avatar, Clickable, DropDown, LoginForm } from './index';

export default function App() {
  return (
    <View style={styles.container}>
      <LoginForm
        placeholderBottom='Password'
        placeholderTop='Email'
        title='Login'
        buttonText='LOG IN'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    // flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
