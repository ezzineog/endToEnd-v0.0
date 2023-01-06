import './styles/App.css';
import Home from './home/Home';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

const lightPalette = {
  // palette values for light mode
  primary: {
    main: "#fffbeb",
  },
  divider: "#fde68a",
  background: {
    default: "#fbbf24",
    paper: "#fbbf24",
  },
  text: {
    primary: "#000",
    secondary: "#27272a",
  },
}
const darkPalette = {
  // palette values for dark mode
  primary: {
    main: "#dbf4ff",
  },
  divider: "#004282",
  background: {
    default: "#000e21",
    paper: "#000e21",
  },
  text: {
    primary: "#fff",
    secondary: "#71717a",
  }
}

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? lightPalette
      : darkPalette
    ),
  },
});

function App() {

  const [mode, setMode] = useState("light");
  const darkMode = useSelector((state) => state.theme.darkMode);

  useMemo(() => {
    // console.log(darkMode)
    if (darkMode) {
      setMode("dark");
    } else {
      setMode("light");
    }
  }, [darkMode]);

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  // let test = useMemo(() => createTheme(darkPalette))




  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Home />
      </div>
    </ThemeProvider>
  );
}

{/* {1 == 1 ? <Home /> : <h1>NOT AUTHORIZED</h1>} */}
export default App;
