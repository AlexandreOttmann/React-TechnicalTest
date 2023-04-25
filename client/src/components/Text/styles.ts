import styled from "styled-components";

import { Color, FontWeight, FontSize } from "../../theme";

export interface TextStyledProps {
  $size: FontSize;
  $color: Color;
  $weight: FontWeight;
}

export const Text = styled.p<{
  $size: FontSize;
  $color: Color;
  $weight: FontWeight;
}>`
  color: ${({ theme, $color }) => theme.colors[$color]};
  font-size: ${({ theme, $size }) => theme.text.sizes[$size]};
  font-weight: ${({ theme, $weight }) => theme.text.weights[$weight]};
  line-height: 1.5;
`;
