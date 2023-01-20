import Home from './home/Home';
import './styles/App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { CssBaseline } from '@mui/material';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import NavBar from './home/navigation/NavBar';
import Statistics from './home/statistics/Statistics';



const light = {
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#ff4400',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
    // Provide every color token (light, main, dark, and contrastText) when using
    // custom colors for props in Material UI's components.
    // Then you will be able to use it like this: `<Button color="custom">`
    // (For TypeScript, you need to add module augmentation for the `custom` value)
    custom: {
      light: '#ffa726',
      main: '#f57c00',
      dark: '#ef6c00',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
};

function App() {
  const [mode, setMode] = useState("light");
  const mode_global_state = useSelector((state) => state.theme.mode_global_state);

  useMemo(() => {
    mode_global_state ? setMode("dark") : setMode("light")
  }, [mode_global_state]);

  const theme = createTheme(

    mode === "light" ? light : { palette: { mode: "dark" } },
    {
      transitions: {
        easing: {
          // This is the most common easing curve.
          easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
          // Objects enter the screen at full velocity from off-screen and
          // slowly decelerate to a resting point.
          easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
          // Objects leave the screen at full velocity. They do not decelerate when off-screen.
          easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
          // The sharp curve is used by objects that may return to the screen at any time.
          sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
        },
      },
    }
    , [mode_global_state, mode]
  );

  theme.transitions.create(['background-color', 'transform']);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar/>
      <div className="app-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="stats" element={<Statistics />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

// eslint-disable-next-line
{/* {1 == 1 ? <Home /> : <h1>NOT AUTHORIZED</h1>} */ }
export default App;
