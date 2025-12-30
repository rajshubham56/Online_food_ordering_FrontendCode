import { Accordion, AccordionSummary,Typography,AccordionDetails,FormGroup,FormControlLabel,Checkbox } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

const demo=[
    {
    Category:"Nuts & Seeds",
    ingredients:["Cashews","Almonds","Walnuts"]
    },
    {
        Category:"Protein",
        ingredients:["Protein","Chicken"]
    },
    {
        Category:"Protein",
        ingredients:["Baco strips","Cheese","Tomato"]
    }

]

const menuCard = () => {
    const handleCheckBoxChange=(value)=>{
        console.log("value")
    }
  return (
    <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div className='lg:flex items-center justify-between'>
            <div className='lg:flex items-center lg:gap-5'>
                <img className='w-[7rem] h-[7rem] object-cover' src="https://cdn.pixabay.com/photo/2022/07/15/18/12/cheese-burger-7323674_1280.jpg"
                 alt="" />
                 <div className='space-y-1 lg:space-y-5 lg:max-w-2xl'>
                    <p className='font-semibold text-xl'>Burger</p>
                    <p>Rs.499</p>
                    <p className='text-gray-400'>nice food</p>

                 </div>

            </div>

          </div>
        </AccordionSummary>
        <AccordionDetails>
          <form>
            <div className='flex gap-5 flex-wrap'>
                {demo.map((item)=>
                <div>
                    <p>{item.Category}</p>  
                    <FormGroup>
                   {item.ingredients.map((item)=><FormControlLabel control={<Checkbox onChange={()=>handleCheckBoxChange(item)} />} label={item} />)}
                   
                    </FormGroup>
                </div>
                )}
            </div>
            <div className="pt-5">
                <Button variant="contained" disabled={false} type="submit">{true?"Add to cart":"Out of Stock"}</Button>
            </div>
          </form>
        </AccordionDetails>
      </Accordion>
    
  )
}

export default menuCard
