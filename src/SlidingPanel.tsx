import * as React from 'react';
import { useEffect } from 'react';
import { Text, View, StyleSheet, Dimensions, StyleProp, ViewStyle } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { withSpring, useSharedValue, useAnimatedStyle, withTiming, Easing } from 'react-native-reanimated';

let WIDTH = Dimensions.get('window').width;
let HEIGHT = Dimensions.get('window').height;

interface SlidingProps {
  style?: StyleProp<ViewStyle>;                     //  your custom style
  size?: number;                                    //  size when opened (0 if fullscreen)
  initialSize?: number;                             //  size when closed
  jumpToMax?: boolean;                              //  goes to max or min size automatically
  topBarDisabled?: boolean;                         //  if true, sliding top bar will be disabled
  children?: React.ReactChild | React.ReactChild[]; //  components rendered in the panel
  isOpened?: boolean;                               //  tells if panel is opened at startup
  animationType?: 'timing' | 'spring' | 'none';     //  timing | spring => withTiming | withSpring
  animationDuration?: number;                       //  if timing, duration of the animation
  disableRadiusOnFull?: boolean;                    //  when on fullsize, disable borderRadius
};

const SlidingPanel: React.FC<SlidingProps> = ({
  style = {},
  size = 400,
  initialSize = 20,
  jumpToMax = true,
  topBarDisabled = false,
  children = <></>,
  isOpened = true,
  animationType = 'timing',
  animationDuration = 500,
  disableRadiusOnFull = true
}) => {
  useEffect(() => {
    WIDTH = Dimensions.get('window').width;
    HEIGHT = Dimensions.get('window').height;

    if (initialSize > size)
      console.log('Your initial size is bigger than your size. It may cause problems.');
    if (size === 0) {
      size = HEIGHT;
    }
  }, []);

  const topPosition = useSharedValue<number>(
    isOpened ? HEIGHT - size : HEIGHT - initialSize
  );
  const topPosStyle = useAnimatedStyle(() => {
    let l = undefined;
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

  return (
    <PanGestureHandler
      onGestureEvent={(e) => {
        if (e.nativeEvent.absoluteY + size < HEIGHT)
          return ;
        else if (e.nativeEvent.absoluteY + initialSize > HEIGHT)
          return ;
        if (jumpToMax) {
          topPosition.value = (e.nativeEvent.velocityY > 0 ?
            HEIGHT - initialSize : topPosition.value = HEIGHT - size
          );
        } else {
          topPosition.value = e.nativeEvent.absoluteY
        }
      }}
    >
      <Animated.View
        style={[
          styles.container,
          topPosStyle,
          style
        ]}
      >
        {!topBarDisabled && <View style={styles.slidingBar} />}
        {children !== <></> && children}
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