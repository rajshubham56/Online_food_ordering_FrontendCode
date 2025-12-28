import { Card, Chip } from '@mui/material'
import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from "@mui/material/IconButton";

const RestaurantCart = () => {
  return (
    <Card className='w-[18rem]'>
        <div className={`${true?'cursor-pointer':"cursor-not-allowed"} relative`}>
            <img
            className='w-full h-[10rem] rounded-t-md object-cover'
             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe8Q6U3auUx7F-a1_3uC0-wpPlBOYEXGu5xg&s"
              alt=""
               />
               <Chip
               size='small'
               className='absolute top-2 left-2'
               color='{true?"success":"error"}'
               lebel={true?"OPEN":"CLOSED"}
               />

        </div>
        <div className='p-4 textPart lg:flex w-full justify-between'>
            <div className='space-y-1'>
                <p className='font-semibold text-lg'>Indian Fast Food</p>
                <p className='text-gray-500 text-sm'>
                    Craving it all?Drive into our global fla...
                </p>
            </div>
            <div>
                <IconButton>
                    {true?<FavoriteIcon />:<FavoriteBorderIcon/>}
                </IconButton>
            </div>

        </div>
      
    </Card>
  )
}

export default RestaurantCart
