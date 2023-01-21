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
} from 'react-router-dom';
import NavBar from './home/navigation/NavBar';
import Statistics from './home/statistics/Statistics';
import Chat from './home/chat/Chat';
import { dark, light, paletteTransition } from './styles/globalColorPalettes';

function App() {
  const [mode, setMode] = useState("light");
  const mode_global_state = useSelector((state) => state.theme.mode_global_state);

  useMemo(() => {
    mode_global_state ? setMode("dark") : setMode("light")
  }, [mode_global_state]);

  const theme = createTheme(
    mode === "light" ? light : dark,
    paletteTransition
    , [mode_global_state, mode]
  );

  theme.transitions.create(['background-color', 'transform']);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <div className="app-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="stats" element={<Statistics />} />
          <Route path="chat" element={<Chat />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

// eslint-disable-next-line
{/* {1 == 1 ? <Home /> : <h1>NOT AUTHORIZED</h1>} */ }
export default App;
