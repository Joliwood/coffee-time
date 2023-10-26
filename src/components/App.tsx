import React, { useState, useMemo, createContext } from 'react';
import {
  ThemeProvider, CssBaseline, GlobalStyles,
} from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import createCustomTheme from '../theme/customTheme';
import HomePage from './HomePage/HomePage';
import Dashboard from './Dashboard/Dashboard';

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

function AppCompents() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={createCustomTheme(mode)}>
        <GlobalStyles
          styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }}
        />
        <CssBaseline />

        <Router>
          <Routes>
            <Route
              path="/"
              element={<HomePage toggleColorMode={colorMode.toggleColorMode} />}
            />
            <Route
              path="/dashboard"
              element={<Dashboard toggleColorMode={colorMode.toggleColorMode} />}
            />
          </Routes>
        </Router>

      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default AppCompents;
