import React, { useState } from 'react';
import { Box, Grid, Button, Typography } from '@mui/material';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

const AuthForms = () => {
  const [showLogin, setShowLogin] = useState(true);

  const toggleForms = () => {
    setShowLogin(!showLogin);
  };

  return (
    <Box
      p={4}
      marginTop={8}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={12} sm={8} md={6}>
        <Box width="100%" maxWidth="400px">
          {/* <Typography variant="h4" align="center" gutterBottom>
            {showLogin ? 'Login' : 'Sign Up'}
          </Typography> */}
          {showLogin ? <LoginForm /> : <SignUpForm />}
          <Button
            variant="text"
            onClick={toggleForms}
            fullWidth
            sx={{ marginTop: '16px' }}
          >
            {showLogin
              ? "Don't have an account? Sign Up"
              : 'Already have an account? Login'}
          </Button>
        </Box>
      </Grid>
    </Box>
  );
};

export default AuthForms;
