import { Box, IconButton, responsiveFontSizes } from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from "@mui/material/Avatar";
import { pink } from "@mui/material/colors";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from "@mui/material/Badge";
import './Navbar.css';
import { Person } from '@mui/icons-material';
import { navigate, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
   const {auth} = useSelector(store=>store)
   
   const navigate=useNavigate()

   const handleAvatarClick=()=>{
    if(auth.user?.role==="ROLE_CUSTOMER"){
      navigate("/my-profile")
    }else{
      navigate("/admin/restaurant")
    }

   }


  return (
    <Box className='px-5 sticky top-0 z-50 py-[0.8rem] bg-[#e91e63] lg:px-20 flex justify-between'>
        <div className='lg:mr-10 cursor-pointer flex items-center space-x-4'>
          <li onClick={()=>navigate("/")} className='logo font-semibold text-gray-300 text2xl'>
            Zosh food
          </li>

        </div>
        <div className='flex items-center space-x-2 lg:space-x-10'>
          <div className=''>
            <IconButton>
              <SearchIcon sx={{fontSize:"1.5rem"}}/>
            </IconButton>
          </div>
          <div className=''>
            {auth.user ? 
            (<Avatar onClick={handleAvatarClick} sx={{bgcolor:"white", color:pink.A400}}>
              {auth.user?.fullName
  ? auth.user.fullName.charAt(0).toUpperCase()
  : auth.isLoading
  ? ""
  : "U"}</Avatar>):
            (<IconButton onClick={()=>navigate("/account/login")}>
              <Person/>
            </IconButton>)}
            
          </div>
          
          <div>
            <Badge  color="secondary" badgeContent={4}>
              <ShoppingCartIcon sx={{ fontSize: "1.5rem" }} />
            </Badge>
          </div>

        </div>  

      </Box>
  );
};

export default Navbar;