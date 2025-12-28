
import React from "react";

import Navbar from "./component/Navbar/Navbar";
import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import DarkTheme from "./Theme/DarkTheme";
import Home from "./component/Home/Home";
import { Apps, Restaurant } from "@mui/icons-material";
import RestaurantDetails from "./component/Restaurant/RestaurantDetails"; 


function App() {
  return (
    <ThemeProvider theme={DarkTheme}>
      <CssBaseline />
      <Navbar />
      {/* <Home/> */}
     <RestaurantDetails />
    </ThemeProvider>
  );
}

export default App;