import React from 'react'
import {Box} from '@mui/material'
import FooterLogo from '../../Assets/FooterLogo.png'

function Footer() {
  return (
    <>
        <Box sx={{ width: '80%',  p: 3, textAlign:'center', borderTop: '1px solid #232323' }} component="footer">
        <Box
        component="img"
        sx={{
          height: '47px',
          width: '137px',
        }}
        alt="The house from the offer."
        src={FooterLogo}
      />
      </Box>
    </>
  )
}

export default Footer