import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AuthForms from './LoginSignup/AuthForms';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Set your primary color here
    },
    background: {
      default: '#f5f5f5', // Set your default background color here
    },
  },
});


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <AuthForms />
      </div>
    </ThemeProvider>
  );
};

export default App;
