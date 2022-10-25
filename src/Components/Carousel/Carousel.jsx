import React from 'react'
import LeftArrow from '../../Assets/Carousel/LeftArrow.png'
import Flexibilidad from '../../Assets/Carousel/Flexibilidad.png'
import HomeOffice from '../../Assets/Carousel/HomeOffice.png'
import Capacitaciones from '../../Assets/Carousel/Capacitaciones.png'
import Snacks from '../../Assets/Carousel/Snacks.png'
import RightArrow from '../../Assets/Carousel/RightArrow.png'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material'

const images = [
{
  image: Flexibilidad,
  text: 'Flexibilidad Horaria'
},
{
  image: HomeOffice,
  text: 'Flexibilidad Horaria'
},
{
  image: Capacitaciones,
  text: 'Flexibilidad Horaria'
},
{
  image: Snacks,
  text: 'Flexibilidad Horaria'
}]

function Carousel() {

  return (
    <Box sx={{heigth: '350px', width: '100%', px: '175px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
      <Card sx={{ maxWidth: 131, backgroundColor: 'transparent' }}>
      <CardMedia
        component="img"
        sx={{width: '34px', height: '34px'}}
        image={LeftArrow}
        alt="left arrow"
      />
      </Card>
      {images.map((image, id) => {
        return (
          <Card key={id} sx={{ maxWidth: 131, backgroundColor: 'transparent' }}>
          <CardMedia
            component="img"
            sx={{width: '131px', height: '131px'}}
            image={image.image}
            alt="left arrow"
          />
          <CardContent>
            <Typography variant="body2" color="white" sx={{textAlign: 'center'}}>
             {image.text} 
            </Typography>
          </CardContent>
          </Card>
        )
      })}
      <Card sx={{ maxWidth: 131, backgroundColor: 'transparent' }}>
      <CardMedia
        component="img"
        sx={{width: '34px', height: '34px'}}
        image={RightArrow}
        alt="left arrow"
      />
      </Card>
    </Box>
  )
}

export default Carousel