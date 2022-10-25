import React from 'react'
import {Box} from '@mui/material'
import CustomBox from './CustomBox'
import { boxes } from './BoxesJson'

function SideBoxes() {

  return (
    <>
        <Box sx={{position: 'absolute', width: '100%', height: '100%'}}>
            {boxes.map((box, id) => {
                return (
                    <CustomBox key={id} image={box.image} top= {box.top} left= {box.left} right= {box.right} bottom= {box.bottom}/>
                )
            })
            
            }
        </Box>
    </>
  )
}

export default SideBoxes