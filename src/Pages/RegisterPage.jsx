import React, {useState} from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import WacoHeaderImage from '../Assets/WacoHeaderImage.png'
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { auth } from '../Firebase/Firebase';
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { useNavigate } from 'react-router-dom';

const theme = createTheme ({
  palette: {
      background: {
          default: "#0E0E0E"
      },
      primary: {
        main: '#000'
    }
  }
})

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()

    const registerUser = async (email, password) => {
      try {
          await createUserWithEmailAndPassword(auth, email, password)
          navigate('/login')
      } catch (error){
          console.log(error)
      }
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box onClick={() => {navigate('/')}} sx={{cursor: 'pointer'}} component='img' src={WacoHeaderImage}/>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  sx={{backgroundColor: 'white'}}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  variant="filled"
                  focused
                  onChange={(evt) => {setEmail(evt.target.value)}}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  sx={{backgroundColor: 'white'}}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  variant="filled"
                  focused
                  onChange={(evt) => {setPassword(evt.target.value)}}
                />
              </Grid>
            </Grid>
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: '#00EA5E' }}
              onClick= {() => {registerUser(email, password)}}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link sx={{color: 'white'}} onClick={() => {navigate('/login')}} variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}