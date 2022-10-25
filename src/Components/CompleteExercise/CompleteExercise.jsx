import { Typography, Box } from '@mui/material'
import React from 'react'

function CompleteExercise() {
  return (
    <>
    <Box>
        <Typography sx={{fontSize: '36px', fontWeight: '300', textAlign: 'center', color: 'white'}}>
            Gracias por <Typography component='span' sx={{fontSize: '36px', fontWeight: 'bold', background: 'linear-gradient(270deg, #00E6E3 100%, #00FF68 100%)', WebkitTextFillColor: 'transparent',backgroundClip: 'text'}}>completar el ejercicio</Typography>
        </Typography>
        <Typography sx={{fontSize: '28px', fontWeight: '300', textAlign: 'center', color: 'white'}}>
            Te invitamos a ver mas informacion
        </Typography>
      </Box>
    </>
  )
}

export default CompleteExercise