import { Box, Button, Link, Paper } from '@mui/material'
import React from 'react'
import InstagramIcon from '../../Assets/InstagramIcon.svg'

function InstagramKnowMore() {

    const openPage = () => {
        window.open('https://wacoservices.com/', '_blank', 'noreferrer')
    }

  return (
    <>
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', mt: '36px', zIndex: '10'}}>
            <Link href='https://www.instagram.com/waconomads/' target='_blank' rel='noreferrer'><Paper sx={{backgroundImage: `url(${InstagramIcon})`, backgroundColor: 'transparent', height: '38px', width: '38px'}} /></Link>
            <Button onClick={() => {openPage()}} variant="contained" sx={{borderRadius: '30px', py: '18px', px: '58px', ml: '27px', background: 'linear-gradient(270deg, #00E6E3 2.73%, #00FF68 100%)', color: '#0E0E0E', textTransform: 'none', fontWeight: '500', fontSize: '18px'}}>Conocer más</Button>
        </Box>
    </>
  )
}

export default InstagramKnowMore