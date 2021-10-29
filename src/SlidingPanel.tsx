// import * as React from 'react';
import React, { useCallback, useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions, StyleProp, ViewStyle } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { withSpring, useSharedValue, useAnimatedStyle, withTiming, Easing } from 'react-native-reanimated';
import {Clickable} from './Clickable';

let WIDTH = Dimensions.get('window').width;
let HEIGHT = Dimensions.get('window').height;

interface SlidingProps {
  style?: StyleProp<ViewStyle>;                     //  your custom style
  snapPoints?: number[] | undefined;                //  if you want your panel to open on multiple sizes
  initialSize?: number;                             //  size when closed
  jumpToMax?: boolean;                              //  goes to max or min size automatically
  topBarDisabled?: boolean;                         //  if true, sliding top bar will be disabled
  topBarStyle?: StyleProp<ViewStyle>                //  style to be applied on top bar
  children?: React.ReactChild | React.ReactChild[]; //  components rendered in the panel
  isOpenedOnIndex?: number;                        //  tells if panel is opened
  animationType?: 'timing' | 'spring' | 'none';     //  timing | spring => withTiming | withSpring
  // callbacks events won't work if animationType == 'none' !
  animationDuration?: number;                       //  if timing, duration of the animation
  disableRadiusOnFull?: boolean;                    //  when on fullsize, disable borderRadius
  onOpened?: (snapIndex: number) => void;           //  callback called when panel is opened
  onClosed?: () => void;                            //  callback called when panel is closed
  onStateChanged?: (snapIndex: number) => void;     //  callback called when panel state is changed
};

const SlidingPanel = ({
  style = {},
  snapPoints = [400],
  initialSize = 20,
  topBarDisabled = false,
  topBarStyle = {},
  children = <></>,
  isOpenedOnIndex = -1,
  animationType = 'timing',
  animationDuration = 500,
  disableRadiusOnFull = true,
  onOpened = () => {},
  onClosed = () => {},
  onStateChanged = () => {},
}: SlidingProps) => {
  const [tab, setTab] = useState(snapPoints);
  const topPosition = useSharedValue<number>(
    isOpenedOnIndex >= 0 && tab[isOpenedOnIndex] ? HEIGHT - tab[isOpenedOnIndex] : HEIGHT - initialSize
  );

  const topPosStyle = useAnimatedStyle(() => {
    let l = 0;
    let b = false;

    switch (animationType) {
      case ('timing'):
        l = withTiming(topPosition.value, {
          duration: animationDuration,
          easing: Easing.out(Easing.exp),
        });
        break;
      case ('spring'):
        l = withSpring(topPosition.value);
        break;
      case ('none'):
        l = topPosition.value;
    }

    b = l === 0 || l.toValue === 0;

    return {
      top: l,
      height: HEIGHT * 2,
      borderTopLeftRadius: b && disableRadiusOnFull ? withTiming(0) : 15,
      borderTopRightRadius: b && disableRadiusOnFull ? withTiming(0) : 15,
    }
  });

  const setNearSize = (e: number) => {
    e = HEIGHT - e;
    let res = e - initialSize;
    let index = -1;

    for (let i = 0; tab[i]; i++) {
      if (Math.abs(e - tab[i]) < res) {
        res = Math.abs(e - tab[i]);
        index = i;
      }
    }

    if (index === -1) {
      // onClosed();
      // onStateChanged(-1);
      topPosition.value = HEIGHT - initialSize;
    } else {
      // onOpened(index);
      // onStateChanged(index);
      topPosition.value = HEIGHT - tab[index];
    }
  }

  const getCurrPos = useCallback(() => {
    if (topPosition.value === HEIGHT - initialSize)
      return (-1);
    for (let i = 0; tab[i]; ++i) {
      if (tab[i] === topPosition.value) {
        return (i);
      }
    }
    return (-1);
  }, []);

  useEffect(() => {
    WIDTH = Dimensions.get('window').width;
    HEIGHT = Dimensions.get('window').height;

    for (let i = 0; i < tab.length; ++i) {
      if (tab[i] < 0) {
        tab[i] = Math.abs(tab[i]);
        console.log('One or many of your snapPoints are negative. I inverted them to avoid crashes.');
      }
    }
    if (tab.includes(0)) {
      setTab(tab.map(e => e === 0 ? HEIGHT : e));
    }
  }, []);

  useEffect(() => {
    if (isOpenedOnIndex === -1) {
      topPosition.value = HEIGHT - initialSize;
    } else if (tab[isOpenedOnIndex] !== undefined) {
      topPosition.value = HEIGHT - tab[isOpenedOnIndex]
    } else {
      console.log(
        '%d is not a valid index of snapPoints. I closed the panel in order to avoid crashes',
        isOpenedOnIndex
      );
      topPosition.value = HEIGHT - initialSize;
    }
  }, [isOpenedOnIndex]);

  useEffect(() => {
    onStateChanged(getCurrPos());
    if (topPosition.value === initialSize)
      return onClosed();
    return onOpened(getCurrPos());
  }, [topPosition.value]);

  return (
    <PanGestureHandler
      onGestureEvent={(e) => setNearSize(e.nativeEvent.absoluteY)}
    >
      <Animated.View
        style={[
          styles.container,
          topPosStyle,
          style
        ]}
      >
        {!topBarDisabled && <View style={[styles.slidingBar, topBarStyle]} />}
        {children !== <></> && children}
        <Clickable
          primary
          text='Print snap points'
          onPress={() => console.log(tab)}
        />
      </Animated.View>
    </PanGestureHandler>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ddd',
    position: 'absolute',
    width: WIDTH,
    padding: 10
  },
  slidingBar: {
    backgroundColor: '#00000022',
    height: 5,
    width: 100,
    borderRadius: 50,
    alignSelf: 'center'
  }
});

export default SlidingPanel;
