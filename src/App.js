import './styles/App.css';
import Home from './home/Home';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { orange } from '@mui/material/colors';
import { CssBaseline } from '@mui/material';

function App() {
  const [mode, setMode] = useState("light");
  const mode_global_state = useSelector((state) => state.theme.mode_global_state);

  useMemo(() => {
    mode_global_state ? setMode("dark") : setMode("light")
  }, [mode_global_state]);

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  }
    , [mode_global_state, mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app-wrapper">
        <Home />
      </div>
    </ThemeProvider>
  );
}

{/* {1 == 1 ? <Home /> : <h1>NOT AUTHORIZED</h1>} */ }
export default App;
