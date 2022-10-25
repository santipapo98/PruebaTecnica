import React from 'react'
import {Box} from '@mui/material'

function CustomBox({image, top = 'auto', left = 'auto', right = 'auto', bottom = 'auto'}) {
  return (
        <Box
            component="img"
            sx={{
            position: 'absolute',
            top: top,
            left: left,
            right: right,
            bottom: bottom
            }}
            src={image}
        />
  )
}

export default CustomBox