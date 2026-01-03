
import React, { useEffect } from "react";

import Navbar from "./component/Navbar/Navbar";
import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import DarkTheme from "./Theme/DarkTheme";
import Home from "./component/Home/Home";
import RestaurantDetails from "./component/Restaurant/RestaurantDetails"; 
import Cart from "./component/Cart/Cart";
import Profile from "./component/Profile/Profile";
import CustomerRoute from "./Routers/CustomerRoute";
import { getUser } from "./component/State/Authentication/Action";
import { useDispatch, useSelector } from "react-redux";
import { store } from "./component/State/store";



function App() {
  const  dispatch=useDispatch()
  const jwt= localStorage.getItem("jwt")
  const {auth}=useSelector(store=>store)


  // useEffect(()=>{
  //   dispatch(getUser(auth.jwt || jwt))
  // },[auth.jwt])
//   useEffect(() => {
//   const token = auth?.jwt || localStorage.getItem("jwt");

//   if (token && !auth?.user) {
//     dispatch(getUser(token));
//   }
// }, []);
useEffect(() => {
    if (jwt) {
        dispatch(getUser(jwt));
    }
}, [jwt, auth.jwt]);;

  return (
    <ThemeProvider theme={DarkTheme}>
      <CssBaseline />
      
      <CustomerRoute/>

    </ThemeProvider>
  );
}

export default App;