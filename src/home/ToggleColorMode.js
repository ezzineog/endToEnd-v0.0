import React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../redux/reducers/themeSlice';

export default function ToggleColorMode() {
  const mode_global_state = useSelector((state) => state.theme.mode_global_state);
  const dispatch = useDispatch()
    
  const darkModeRecommanded = () => {
    let ui_switch_txt = `switch to ${mode_global_state ? "light" : "dark"} mode`
    return mode_global_state ? ui_switch_txt : ui_switch_txt.replace("switch to", "Try")
  }

  return (
    <Box
      sx={{
        display: 'flex',
        width: '250px  !important',
        height: "10px !important",
        alignItems: 'center',
        justifyContent: 'center',
        wordWrap: "break-word",
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 10,
        p: 3,
      }}
    >
      {darkModeRecommanded()}
      <IconButton sx={{ ml: 0.2 }} onClick={()=>dispatch(toggleTheme())} color="inherit">
        {mode_global_state ? <Brightness4Icon />: <Brightness7Icon />}
      </IconButton>
    </Box>
  );
}