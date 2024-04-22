import { Inter } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const inter = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
});

const { palette } = createTheme();
const { augmentColor } = palette;

const createColor = (mainColor: string) => augmentColor({ color: { main: mainColor } });

const theme = createTheme({
  palette: {
    mode: 'light',
    info: createColor('#000'),
  },
  typography: {
    fontFamily: inter.style.fontFamily,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#60a5fa',
          }),
        }),
      },
    },
  },
});

export default theme;
