import { colors } from "./colors";
import { spacings } from "./spacings";
import { sizes, weights } from "./text";
import { borderWidth, radius } from "./border";

const theme = {
  colors,
  spacings,
  text: {
    sizes,
    weights,
  },
  border: {
    width: borderWidth,
    radius,
  }
};

export type { Color } from "./colors";
export type { Spacing } from "./spacings";
export type { FontSize, FontWeight } from "./text";

export type Theme = typeof theme;
export default theme;
