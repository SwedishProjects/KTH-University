import React from 'react'
import Button from '@mui/material/Button';
import { LiBtn } from '../../../../Styles/Library';

const LibraryButton = ({title}) => {
  return (
      <>
          <Button variant="contained" sx={LiBtn}>{ title }</Button>
      </>
  )
}

export default LibraryButton