import * as React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SlidingPanel, Clickable } from './index';
import colors from './src/colors';

export default function App() {
  const [isPanelOpened, setIfPanelOpened] = React.useState(1);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#000', paddingVertical: 20 }}> Sample App </Text>
      <Clickable primary primaryColor={colors.fadeBlue} text='Change panel state' onPress={() => {
        setIfPanelOpened(e => {
          if (e === -1)
            return 0;
          else if (e + 1 >= 3)
            return -1;
          return e + 1;
        })}}
      />
      <Clickable primary primaryColor={colors.fadeGreen} text='Toggle fullscreen' onPress={() => setIfPanelOpened(e => e === 3 ? 0 : 3)} />
      <SlidingPanel
        isOpenedOnIndex={isPanelOpened}
        animationType='timing'
        snapPoints={[400, 500, 600, 0]}
        initialSize={0}
        animationDuration={500}
        onOpened={(e: number) => console.log('LOUL : ', e)}
        onClosed={() => console.log('closed')}
      >
        <Text style={styles.title}> This is my sliding panel </Text>
        <Clickable primary primaryColor={colors.fadeBlue} text='Change panel state' onPress={() => {
          setIfPanelOpened(e => {
            if (e === -1)
              return 0;
            else if (e + 1 >= 4)
              return -1;
            return e + 1;
          })}}
        />
        <Clickable primary primaryColor={colors.fadeGreen} text='Toggle fullscreen' onPress={() => setIfPanelOpened(e => e === 3 ? 0 : 3)} />
      </SlidingPanel>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: 60,
    paddingBottom: 20
  }
});
