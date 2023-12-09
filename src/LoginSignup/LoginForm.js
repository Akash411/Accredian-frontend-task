import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, Box } from '@mui/material';

const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Perform login authentication or API call here
    const obj = {email: loginData.email,password: loginData.password};
    checkLoginEntry(obj);
    console.log('Login data:', loginData);
  };
  const checkLoginEntry = async(signupData) =>{ 
    try{ 
        const res = await fetch("/api/users/login", {
             method: 'POST', 
             headers:{ 
                'Content-Type': 'application/json' 
            },
             body: JSON.stringify(signupData) });
              const data = await res.json();
               if(!res.ok){ 
                console.log(data.description);
                 return;
                 } 
                 console.log(data);
                 }
        catch(error)
        { console.log(error); 
        } 
    }
  return (
    <form onSubmit={handleLoginSubmit}>
      <Box bgcolor="#ffffff" borderRadius={8} boxShadow="0px 4px 8px rgba(0, 0, 0, 0.1)" p={4}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12}>
            <Typography variant="h5" align="center" gutterBottom>
              Login
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              type="email"
              label="Email"
              name="email"
              value={loginData.email}
              onChange={handleLoginChange}
              required
              variant="outlined"
              color="primary"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              type="password"
              label="Password"
              name="password"
              value={loginData.password}
              onChange={handleLoginChange}
              required
              variant="outlined"
              color="primary"
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Login
            </Button>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};

export default LoginForm;