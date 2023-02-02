import { DefaultTheme } from 'styled-components';
import blueTheme from './blue-theme'

const greenTheme: DefaultTheme = {
    ...blueTheme,
    name: 'green',

    colors: {
      main: '#208050',
      secondary: '#79e9b1',
      textMain: '#000',
      textSecondary: '#fff'
    },
  
    fontFamily: '-apple-system, BlinkMacSystemFont, "Roboto", sans-serif',
  };
  
  export default greenTheme;