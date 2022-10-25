import React from 'react'
import { Typography, Box } from '@mui/material'

function Benefits(props) {
  return (
    <>
      <Box sx={{mb: '70px'}} ref={props.benefitsRef}>
        <Typography sx={{fontWeight: '300', fontSize: '36px', width: '420px', textAlign: 'center', color: 'white'}}>
            Entre los
            <Box component='span' sx={{background: 'linear-gradient(270deg, #00E6E3 2.73%, #00FF68 100%)', fontSize: '36px', fontWeight: '900', color: 'black', letterSpacing: '-3px', px: '10px', mx: '10px'}}>
                beneficios 
            </Box>
            que <b>ofrecemos</b> se encuentran
        </Typography>
      </Box>
    </>
  )
}

export default Benefits