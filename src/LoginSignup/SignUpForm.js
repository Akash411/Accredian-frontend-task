import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, Box } from '@mui/material';

const SignUpForm = () => {
  const [signupData, setSignupData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === 'password' || name === 'confirmPassword') {
      setPasswordsMatch(
        prevPasswordsMatch =>
          signupData.password === value || (signupData.confirmPassword === value && value !== '')
      );
    }
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    if (signupData.password === signupData.confirmPassword) {
        const obj = {name: signupData.username,email: signupData.email,password: signupData.password};
        // emailPresentOrNot(obj.email);
        addDataOnServer(obj);
      setPasswordsMatch(true);
    } else {
      if (signupData.password !== '' && signupData.confirmPassword !== '') {
        setPasswordsMatch(false);
      }
    }
  };
//   const emailPresentOrNot = async(signupData) =>{ 
//     try{ 
//         const res = await fetch("/api/users/email", {
//              method: 'POST', 
//              headers:{ 
//                 'Content-Type': 'application/json' 
//             },
//              body: JSON.stringify(signupData) });
//               const data = await res.json();
//                if(!res.ok){ 
//                 console.log(data.description);
//                  return;
//                  } 
//                  console.log(data);
//                  }
//         catch(error)
//         { console.log(error); 
//         } 
//     }
  const addDataOnServer = async(signupData) =>{ 
    try{ 
        const res = await fetch("/api/users", {
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
                 if(typeof(data)==undefined) alert("already register")
                 }
        catch(error)
        { console.log(error); 
        } 
    }

  return (
    <form onSubmit={handleSignupSubmit}>
      <Box bgcolor="#ffffff" borderRadius={8} boxShadow="0px 2px 4px rgba(0, 0, 0, 0.1)" p={4}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12}>
            <Typography variant="h5" align="center" gutterBottom>
              Sign Up
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Username"
              name="username"
              value={signupData.username}
              onChange={handleSignupChange}
              required
              variant="outlined"
              color="secondary"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              type="email"
              label="Email"
              name="email"
              value={signupData.email}
              onChange={handleSignupChange}
              required
              variant="outlined"
              color="secondary"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              type="password"
              label="Password"
              name="password"
              value={signupData.password}
              onChange={handleSignupChange}
              required
              variant="outlined"
              color="secondary"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              type="password"
              label="Confirm Password"
              name="confirmPassword"
              value={signupData.confirmPassword}
              onChange={handleSignupChange}
              required
              variant="outlined"
              color="secondary"
              error={!passwordsMatch}
              helperText={
                !passwordsMatch && signupData.password !== '' && signupData.confirmPassword !== ''
                  ? "Passwords don't match"
                  : ''
              }
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Sign Up
            </Button>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};

export default SignUpForm;
