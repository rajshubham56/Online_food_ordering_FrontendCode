import { Button, Card } from '@mui/material'
import React from 'react'

const OrderCard = () => {
  return (
    <Card className='flex justify-between items-center p-5'>
        <div className='flex items-center space-x-5'>
            <img 
            className='h-16 w-16'
            src="https://cdn.pixabay.com/photo/2022/02/12/15/07/biryani-7009130_1280.jpg"
             alt="" />
             <div>
                <p>Biryani</p>
                <p>₹299</p>
             </div>
        </div>
        <div>
            <Button className='cursor-not-allowed'>Completed</Button>
        </div>
      
    </Card>
  )
}

export default OrderCard;
