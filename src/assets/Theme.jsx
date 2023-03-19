import { createTheme } from '@mui/material/styles';

const Theme = createTheme({
  palette: {
    primary: {
      light: '#75728',
      main: '#9564F5',  //'#9564F5'
      dark: '#002884',
      contrastText: '#fff',
    
    },
    secondary: {
      light: '#ff7961',
      main: '#9F2ABF',
      dark: '#ba000d',
      contrastText: '#000',
    },

    color1: '#F2055C'  ,
    color2: '#9F2ABF'  ,
    color3: '#4DBF3B',
    color4:  '#ffaa00',    
    color5:  '#0091ff',

    color1t1: '#ff7db3dd',
    color2t1: '#ff5fffd8' ,
    color3t1: '#6affa3d8' ,
    color4t1: '#ffed65e0' ,
    color5t1: '#65ffffe0' ,

    color1t2: '#ff6da32c',
    color2t2: '#c800ff25',
    color3t2: '#22ff0027',
    color4t2: '#fffb0031',
    color5t2: '#68cdff31',

  },
});

export default Theme;
