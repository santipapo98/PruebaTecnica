import React, {useRef} from 'react'
import Benefits from '../Components/Benefits/Benefits'
import Carousel from '../Components/Carousel/Carousel'
import CompleteExercise from '../Components/CompleteExercise/CompleteExercise'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import IdeasToProducts from '../Components/IdeasToProducts/IdeasToProducts'
import InstagramKnowMore from '../Components/InstagramKnowMore/InstagramKnowMore'
import WelcomeSection from '../Components/WelcomeSection/WelcomeSection'
import {Box} from '@mui/material'
import SideBoxes from '../Components/SideBoxes/SideBoxes'

function LandingPage() {

  const topRef = useRef(null)
  const benefitsRef = useRef(null)

  return (
    <>
        <Header topRef={topRef} benefitsRef={benefitsRef}/>
        <WelcomeSection topRef={topRef}/>
        <IdeasToProducts/>
        <Benefits benefitsRef={benefitsRef}/>
        <Carousel />
        <Box sx={{position: 'relative', width: '100%', height: '500px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <SideBoxes/>
          <CompleteExercise/>
          <InstagramKnowMore/>
        </Box>
        <Footer/>
    </>
  )
}

export default LandingPage