import React from 'react'
import { Typography } from '@mui/material'
function Typographyy() {
  return (
    <div>
      <Typography variant='h1'>Heading one</Typography>
      <Typography variant='h2'>Heading one</Typography>
      <Typography variant='h3'>Heading one</Typography>
       <Typography variant='h4' component="h1" gutterBottom>Heading one</Typography> {/* Even though the text is styled like an H4, rendering it as an H1 element  */}
      <Typography variant='h5'>Heading one</Typography>
      <Typography variant='h6'>Heading one</Typography>


      <Typography variant='subtitle1'>subtitle1</Typography>
      <Typography variant='subtitle2'>subtitle2</Typography>

      <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione a officia iusto, voluptas molestias labore facere? Ullam a, inventore, saepe, distinctio pariatur neque nemo eveniet at beatae totam suscipit dolores.</Typography>
      <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nemo animi, expedita voluptatem quisquam dolores a ab et mollitia similique sit tempora commodi esse ratione. Quasi unde laborum deleniti natus.</Typography>

    </div>
  )
}

export default Typographyy