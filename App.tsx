import { StyleSheet, View } from 'react-native';
import { Clickable } from './index';

export default function App() {
  return (
    <View style={styles.container}>
      <Clickable text='pute' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
