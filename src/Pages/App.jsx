import React from 'react'
import { Box, CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import LandingPage from './LandingPage';
import LoginPage from '../Pages/LoginPage'
import RegisterPage from '../Pages/RegisterPage'
import PostList from '../Pages/PostList'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import PrivateRoutes from '../Utils/PrivateRoutes';
import {Provider} from 'react-redux';
import store from '../Redux/store';

function App() {

    const customBackgroundColor = createTheme ({
        palette: {
            background: {
                default: "#0E0E0E"
            },
            primary: {
                main: '#FFF'
            }
        }
    })

  return (
   <>
   <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route element= {<PrivateRoutes/>}>
                    <Route path='/posts' element={<PostList />} />
                </Route> 
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path="/" element={ <ThemeProvider theme={customBackgroundColor}>
                                    <CssBaseline/>
                                    <Box maxWidth={1440} sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        margin: '0 auto'
                                    }}>
                                    <LandingPage/>
                                    </Box>
                                </ThemeProvider>}>
            </Route>
            </Routes>
        </BrowserRouter>
    </Provider>
   </>
  )
}

export default App