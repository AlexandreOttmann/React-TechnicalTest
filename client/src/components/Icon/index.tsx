import { FC } from "react";
import IcoMoon from "react-icomoon";
import { useTheme } from "styled-components";
import { Color, FontSize } from "../../theme";

import iconsCollection from "./iconsCollection.json";
import { IconName } from "./types";

export interface IconProps {
  name: IconName;
  color?: Color;
  size?: FontSize;
}

const Icon: FC<IconProps> = ({ color, name, size, ...props }) => {
  const theme = useTheme();

  return (
    <IcoMoon
      color={color ? theme.colors[color] : "current"}
      iconSet={iconsCollection}
      icon={name}
      size={size ? theme.text.sizes[size] : "1em"}
      {...props}
    />
  );
};

export type { IconName } from "./types";
export { iconNames } from "./types";
export default Icon;
