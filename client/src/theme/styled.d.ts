import "styled-components";

import { Theme } from "./index";

// Augment styled-components' default theme type with our own
declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
