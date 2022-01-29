import React, { useRef } from 'react';
import { Animated, PanResponder, View } from 'react-native';

export const RespView: React.FunctionComponent<{element: React.FunctionComponent}> = (props) => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: Number(pan.x),
          y: Number(pan.y)
        });
      },
      onPanResponderMove: Animated.event(
        [
          null,
          { dx: pan.x, dy: pan.y }
        ]
      ),
      onPanResponderRelease: () => {
        pan.flattenOffset();
      }
    })
  )
  return (
    <View>
      {props.element}
    </View>
  )
}