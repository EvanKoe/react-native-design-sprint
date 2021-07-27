import React, { FC, useState } from "react";
import { View } from 'react-native';
import colors from "./colors";

interface Props {
  vertical?: boolean;     // is this spacer vertical ?
  horizontal?: boolean;   // or horizontal ?
  size: number;           // size of the spacer (in px)
}

export const Spacer: FC<Props> = ({
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
