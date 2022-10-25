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
import {googleProvider, facebookProvider, auth} from '../Firebase/Firebase'
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setAuthToken } from '../Redux/Actions/AuthAction';
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

export default function LoginPage() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider).then((result) => {
      dispatch(setAuthToken(result.user));
      navigate('/')
    }).catch((error)=> {
        console.log(error)
    })
}

const signInWithFacebook = () => {
  signInWithPopup(auth, facebookProvider).then((result) => {
      dispatch(setAuthToken(result.user));
      navigate('/')
  }).catch((error)=> {
      console.log(error)
  })
}

const logIn = async (email, password) => {
  try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      dispatch(setAuthToken(result.user));
      navigate('/')
  } catch (error) {
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
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              sx={{backgroundColor: 'white'}}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              variant="filled"
              color='primary'
              focused
              onChange={(evt) => {setEmail(evt.target.value)}}
            />
            <TextField
              sx={{backgroundColor: 'white'}}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              variant="filled"
              color='primary'
              focused
              onChange={(evt) => {setPassword(evt.target.value)}}
            />
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 1, backgroundColor: '#00EA5E' }}
              onClick = {()=>{logIn(email, password)}}
            >
              Sign In
            </Button>
            <Button
              onClick={() => {signInWithGoogle()}}
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 1, backgroundColor: '#00E6E3'}}
            >
              Sign In with Google
            </Button>
            <Button
            onClick={() => {signInWithFacebook()}}
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 3, backgroundColor: '#00B3B0' }}
            >
              Sign In with Facebook
            </Button>
            <Grid container>
              <Grid item>
                <Link sx={{color: 'white'}} onClick={() => {navigate('/register')}} variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}