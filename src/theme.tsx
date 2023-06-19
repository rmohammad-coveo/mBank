import {createTheme} from '@mui/material/styles';
import {red} from '@mui/material/colors';

export const Theme = {
  primaryText : '#333357',
  secondaryText: '#FFFFFF',
  primary : '#062D70',
  secondary: '#004990',
  selection : '#1372EC',
  link: '#1372EC',
  navbar: '#062D70',
  background: '#E5E5E5',
  button : '#1372EC',
  footer: '#262646',
  resultLink: '#1372EC',
  excerpt : '#626971',
  headerIconColor : "grey"
}

const theme = createTheme({
  palette: {
    mode: 'light',
    text :{
      primary : Theme.primaryText
    },
    primary: {
      main: Theme.primary,
    },
    secondary: {
      main: Theme.secondary,
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  typography: {
    fontFamily: 'Gibson,Noto Sans, Avenir, Helvetica, Arial, sans-serif',
    // Material-UI uses rem units for the font size. This will change the base size for the entire search page
    // More info at https://material-ui.com/customization/typography/#font-size
    fontSize: 16,
    fontWeightRegular : '300',
    fontWeightMedium : '400'
  },
});

export default theme;
