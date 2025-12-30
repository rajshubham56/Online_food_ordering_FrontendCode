import { Grid, Radio,Typography,FormControl,RadioGroup,FormControlLabel,Divider } from '@mui/material'
import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { Padding } from '@mui/icons-material';
import MenuCard from './menuCard';  



const categories=[
    "Pizza",
    "biriyani",
    "burger",
    "chicken",
    "rice"
]

const foodTypes=[
    {label:"all", value:"all"},
    {label:"vegetarian only", value:"vegetarian"},
    {label:"Non-vegetarian", value:"non_vegetarian"},
    {label:"seasonal", value:"seasonal"},
]

const menu=[1,1,1,1,1,1]

const RestaurantDetails = () => {
    const [foodType, setFoodType]=React.useState("all");    
    const handleFilter=(e)=>{
        console.log(e.target.value,e.target.name)};
  return (
    <div className='px-5 lg:px-20'>
        <section>
            <h3 className='text-gray-500 py-2 mt-10'>Home/india/indian fast food/3</h3>
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <img className="w-full h-[40vh] object-cover"
                         src="http://res.cloudinary.com/dcpesbd8q/image/upload/v1707802815/ux3xq93xzfbqhtudigv2.jpg"
                          alt="" />
                    </Grid >
                    
                    <Grid item xs={12} lg={6} >
                        <img className='w-full h-[40vh] object-cover'
                        src="https://res.cloudinary.com/dcpesbd8q/image/upload/v1707802819/cpfxroggttxg6tedfskd.jpg" alt="" />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <img className='w-full h-[40vh] object-cover'
                         src="https://res.cloudinary.com/dcpesbd8q/image/upload/v1707802825/dtwyuhxuawmg3qzffv84.jpg" alt="" />

                    </Grid>
                    
                    
                </Grid>
            </div>
            <div className='pt-3 pb-5'>
                <h1 className='text-4xl font-semibold'>Indian Fast Food</h1>
                
                <p className='text-gray-500 mt-1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam ipsa fuga, 
                    vel molestias dicta impedit beatae quod voluptatum? Autem sequi recusandae
                    sunt nihil cupiditate. Consequuntur id deserunt quibusdam at perspiciatis?
                </p>

                <div className='space-y-3 mt-3'>
                    <p className='text-gray-500 flex items-center gap-3'>
                    <LocationOnIcon />

                    <span>
                        Mumbai, Maharashtra, India
                    </span>
                </p>
                 <p className='text-gray-500 flex items-center gap-3'>
                    <CalendarTodayIcon />

                    <span>
                        Mon-Sun : 10:00 AM - 10:00 PM(today)
                    </span>
                </p>
                </div>
            </div>

        </section>
        <divider>
            <section className='pt-[2rem] lg:flex relative'>
                <div className='space-y-10 lg:w-[20%] filter p-5 '>
                    
                    <div className='box space-y-5 lg:sticky top-28 d'>
                        <div>
                            <Typography varients="h5" sx={{PaddingBottom:"1rem"}}>Food Type</Typography>

                            <FormControl className='py-10 space-y-5' component="fieldset">
                                <RadioGroup onChange={handleFilter} name="food_Type" value={foodType}>
                                    {foodTypes.map((item)=> <FormControlLabel key={item.value} value={item.value} control={<Radio />} label={item.label} />)}
                                </RadioGroup>
                            </FormControl>
                        </div>
                       <Divider /> 
                        <div>
                            <Typography varients="h5" sx={{PaddingBottom:"1rem"}}>Food Category</Typography>

                            <FormControl className='py-10 space-y-5' component="fieldset">
                                <RadioGroup onChange={handleFilter} name="food_Type" value={foodType}>
                                    {categories.map((item)=> <FormControlLabel key={item} value={item} control={<Radio />} label={item} />)}
                                </RadioGroup>
                            </FormControl>
                        </div>

                    </div>

                </div>
                <div className='space-y-10 lg:w-[80%] lg:pl-10'>
                    {menu.map((item)=><MenuCard/>)}
                </div>

            </section>

        </divider>

      
    </div>
  )
}

export default RestaurantDetails

