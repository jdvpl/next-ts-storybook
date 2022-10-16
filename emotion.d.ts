/* Extending the Theme interface from emotion with the AppTheme interface. */
import "@emotion/react";
import { AppTheme } from "./styles/themes";

/* Extending the Theme interface from emotion with the AppTheme interface. */
declare module "@emotion/react" {
  export interface Theme extends AppTheme {}
}
