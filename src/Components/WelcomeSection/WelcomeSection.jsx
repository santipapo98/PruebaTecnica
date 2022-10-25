import React from 'react'
import { Typography } from '@mui/material'
import World from '../../Assets/LandingWorld.png'
import WacoText from '../../Assets/WacoName.png'
import { Box } from '@mui/system'

function WelcomeSection(props) {
  return (
    <>
          <Box ref={props.topRef} sx={{px: '123px', backgroundImage: `url(${World})`, backgroundColor: 'transparent', width: 1300, height: 640, marginLeft: 'auto', display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems: ' flex-start'}}>
            <Typography color="white" variant="body1" sx={{width: '449px', fontSize: '46px', fontWeight: '300'}}>Bienvenido a tu <b>Entrevista Tecnica</b> en</Typography>
            <Box component='div' sx={{backgroundImage: `url(${WacoText})`, backgroundColor: 'transparent', width: '200px', height: '43px', mt: '20px '}}/>
          </Box>
    </>
  )
}

export default WelcomeSection