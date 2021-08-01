import React from 'react'
import { CircularProgress } from '@material-ui/core'

const Loader = () => (
  <CircularProgress
    style={{
      position: 'fixed',
      top: 'calc(50% - 40px / 2)',
      right: 'calc(50% - 40px / 2)'
    }}
    size={40}
  />
)
export default Loader
