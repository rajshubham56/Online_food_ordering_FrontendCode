import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const EventCard = () => {
  return (
    <div>
      <Card sx={{width:260}}>
        <CardMedia
         sx={{height:260}}
        image='https://cdn.pixabay.com/photo/2022/08/29/17/44/burger-7419420_1280.jpg'/>

        <CardContent>
            <Typography varient='h5'>
                Indian Fast Food
            </Typography>
             <Typography varient='body2'>
                50% off on your first order
            </Typography>
            <div className='py-2 space-y-2'>
                <p>{"Mumbai"}</p>
                <p className='text-sm text-blue-500'>December 25,2025 12:00 AM</p>
                <p className='text-sm text-red-500'>December 31,2025 12:00 AM</p>

            </div>
        </CardContent>
        {false && <CardActions>
            <IconButton>
                <DeleteIcon/>
            </IconButton>
        </CardActions>}
      </Card>
    </div>
  )
}

export default EventCard
