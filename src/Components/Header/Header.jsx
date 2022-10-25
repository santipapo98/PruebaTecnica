import React from 'react'
import {AppBar, Toolbar, Link, Box} from '@mui/material';
import HeaderImage from '../../Assets/WacoHeaderImage.png';
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux'
import {logOff} from '../../Firebase/Firebase'
import {useDispatch} from 'react-redux'
import { setAuthToken } from '../../Redux/Actions/AuthAction';

function Header(props) {

  const navigate  = useNavigate()
  const auth_token = useSelector(state => state.user_info.auth_token)
  const dispatch = useDispatch()

  const resetToken = () => {
    dispatch(setAuthToken(''))
    logOff()
    navigate('/login')
  }

  return (
    <>
        <AppBar elevation={0} position='fixed' sx={{px: '180px', py: '29px', maxWidth: '1440px', right: 'auto', background: 'transparent linear-gradient(180deg,#0E0E0E,hsla(0,0%,96.1%,0)) 0 0 no-repeat padding-box'}}>
            <Toolbar disableGutters={true}>
                <Box sx={{flexGrow: 1}}> 
                    <Box component="img" alt="Waco Header" src={HeaderImage}/>
                </Box>
                <Link onClick={() => {props.topRef.current?.scrollIntoView({behavior: 'smooth'})}} sx={{mx: '30px', cursor: 'pointer'}} underline="none" rel="noreferrer" variant='body1'>INICIO</Link>
                <Link onClick={() => {props.benefitsRef.current?.scrollIntoView({behavior: 'smooth'})}} sx={{mx: '30px', cursor: 'pointer'}} underline="none" rel="noreferrer" variant='body1'>BENEFICIOS</Link>
                { auth_token && <Link onClick={() => {navigate('/posts')}} sx={{mx: '30px', cursor: 'pointer'}} underline="none" rel="noreferrer" variant='body1'>POSTS</Link>}
                <Link onClick={() => {!auth_token ? navigate('/login') : resetToken()}} sx={{mx: '30px', cursor: 'pointer'}} underline="none" rel="noreferrer" variant='body1'>{auth_token ? 'Log Off' : 'Log in'}</Link>
            </Toolbar>
        </AppBar> 
    </>
  )
}

export default Header