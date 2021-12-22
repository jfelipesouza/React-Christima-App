import 'styled-components';

import light from '../styles/theme/light';
import dark from '../styles/theme/dark';

export type LightTheme = typeof light;
export type DarkTheme = typeof dark;

declare module'styled-components'{
  export interface DefaultTheme extends LightTheme{}
  export interface DarkTheme extends DarkTheme{}
}
