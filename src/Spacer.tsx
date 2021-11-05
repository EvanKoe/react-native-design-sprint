import React, { FC } from "react";
import { View } from 'react-native';

interface Props {
  vertical?: boolean;     // is this spacer vertical ?
  horizontal?: boolean;   // or horizontal ?
  size: number | string;  // size of the spacer (in px)
}

const Spacer: FC<Props> = ({
  vertical = false,
  horizontal = false,
  size = 20
}) => {
  return (
    <View
      style={{
        height: vertical ? size : 0,
        width: horizontal ? size : 0
      }}
    />
  );
};

export {Spacer};
