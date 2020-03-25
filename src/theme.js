import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
        main: '#AC0026',
    },
    secondary: {
        main: '#FF2858',
    },
    ternary: {
        main: '#22222D',
    }
  },
  status: {
    danger: 'orange',
  },
});

export default theme;