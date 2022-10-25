import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import SocialMedia from '../../Assets/SocialMedia.png'

function IdeasToProducts() {
  return (
    <>
        <Box sx={{height: '391px', width: '100%', px: '263px', background: 'linear-gradient(270deg, #00E6E3 2.73%, #00FF68 100%)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: '52px'}}>
            <Paper sx={{backgroundImage: `url(${SocialMedia})`, boxShadow: "none" , width: '446px', height: '376px', mt: '-100px', backgroundColor: 'transparent'}} />
            <Typography sx={{width: '380px', height: '178px', fontSize: '45px', textAlign: 'right', fontWeight: '300'}}>Trabajamos para <b>Convertir ideas</b> en <b>productos.</b></Typography>
        </Box>
    </>
  )
}

export default IdeasToProducts