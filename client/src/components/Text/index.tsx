import { FC, ReactNode } from "react";
import { Color, FontWeight, FontSize } from "../../theme";

import * as S from "./styles";

export interface TextProps {
  tag?: "span" | "div" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children?: ReactNode;
  color?: Color;
  size?: FontSize;
  weight?: FontWeight;
}

const Text: FC<TextProps> = ({
  children,
  color = "grey-800",
  size = "font-15",
  weight = "regular",
  tag,
  ...props
}) => {
  return (
    <S.Text as={tag} $color={color} $size={size} $weight={weight} {...props}>
      {children}
    </S.Text>
  );
};

export default Text;
