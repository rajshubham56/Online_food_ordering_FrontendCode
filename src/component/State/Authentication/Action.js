import axios from "axios";

import { api, API_URL } from "../../Config/api";
import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  ADD_TO_FAVORITE_REQUEST,
  ADD_TO_FAVORITE_SUCCESS,
  ADD_TO_FAVORITE_FAILURE,
  LOGOUT
} from "./ActionType";




// export const registerUser=(reqData)=>async(dispatch)=>{
//      dispatch({type:REGISTER_REQUEST})
//     try{
//         const { data } = await axios.post(
//       `${API_URL}/auth/signup`,
//       reqData.userData
//     );
//        if(data.jwt)localStorage.setItem("jwt",data.jwt)
//        if(data.role==="ROLE_RESTAURANT_OWNER"){
//           reqData.navigate("/admin/restaurant")
//        }
//        else{
//           reqData.navigate("/")
//        }
//        dispatch({type:REGISTER_SUCCESS,payload:data.jwt})
//        console.log("register success",data)

//     }catch (error){
//         dispatch({type:REGISTER_FAILURE,payload:error});
//         console.log("error",error);
//     }
// }
export const registerUser=(reqData)=>async(dispatch)=>{
    dispatch({type:REGISTER_REQUEST})
    try{
        const { data } = await axios.post(`${API_URL}/auth/signup`, reqData.userData);
        if(data.jwt) localStorage.setItem("jwt", data.jwt);

        // --- YEH LINE ADD KAREIN ---
        dispatch(getUser(data.jwt)); 
        // ---------------------------

        if(data.role==="ROLE_RESTAURANT_OWNER"){
            reqData.navigate("/admin/restaurant")
        } else {
            reqData.navigate("/")
        }
        dispatch({type:REGISTER_SUCCESS, payload:data.jwt})
        console.log("register success", data)
    } catch (error){
        dispatch({type:REGISTER_FAILURE, payload:error});
    }
}

// export const loginUser=(reqData)=>async(dispatch)=>{
//      dispatch({type:LOGIN_REQUEST})
//     try{
//        const {data}=await axios.post(`${API_URL}/auth/signin`,reqData.userData)
//        if(data.jwt)localStorage.setItem("jwt",data.jwt);
//        if(data.role==="ROLE_RESTAURANT_OWNER"){
//           reqData.navigate("/admin/restaurant")
//        }
//        else{
//           reqData.navigate("/")
//        }
//        dispatch({type:LOGIN_SUCCESS,payload:data.jwt})
//        console.log("login success",data)

//     }catch (error){
//         dispatch({type:LOGIN_FAILURE,payload:error})
//         console.log("error",error)
//     }
// }
export const loginUser=(reqData)=>async(dispatch)=>{
    dispatch({type:LOGIN_REQUEST})
    try {
       const {data} = await axios.post(`${API_URL}/auth/signin`, reqData.userData)
       
       if(data.jwt) localStorage.setItem("jwt", data.jwt);
       
       if(data.role === "ROLE_RESTAURANT_OWNER"){
          reqData.navigate("/admin/restaurant")
       } else {
          reqData.navigate("/")
       }

       // 1. Pehle login success dispatch karein
       dispatch({type: LOGIN_SUCCESS, payload: data.jwt})
       
       // 2. AB SABSE ZAROORI: User ka data fetch karne ke liye getUser call karein
       // Taaki Navbar ko auth.user mil sake aur Avatar icon show ho
       dispatch(getUser(data.jwt)); 

       console.log("login success", data)

    } catch (error) {
        dispatch({type: LOGIN_FAILURE, payload: error})
        console.log("error", error)
    }
}

// export const getUser=(jwt)=>async(dispatch)=>{
//      dispatch({type:GET_USER_REQUEST})
//     try{
//        const {data}=await api.get(`/api/users/profile`,{
//           headers:{
//             Authorization:`Bearer ${jwt}`
//           }
//        })
       
//        dispatch({type:GET_USER_SUCCESS,payload:data})
//        console.log("user profile",data)


//     }catch (error){
//         dispatch({type:GET_USER_FAILURE,payload:error})
//         console.log("error",error)
//     }
// }

export const getUser = (jwt) => async (dispatch) => {
    dispatch({ type: GET_USER_REQUEST });
    try {
        // 'api' instance ki jagah direct axios use kar sakte hain agar 403 aa raha ho
        const { data } = await axios.get(`${API_URL}/api/users/profile`, {
            headers: {
                Authorization: `Bearer ${jwt}` // Space check karein
            }
        });
        dispatch({ type: GET_USER_SUCCESS, payload: data });
        console.log("user profile fetch success", data);
    } catch (error) {
        dispatch({ type: GET_USER_FAILURE, payload: error });
        console.log("error fetching user profile", error);
    }
};

export const addToFavorite=({jwt,restaurantId})=>async(dispatch)=>{
     dispatch({type:ADD_TO_FAVORITE_REQUEST})


    try{
       const {data}=await api.put(`/api/restaurants/${restaurantId}/add-favorite`,{},{
          headers:{
            Authorization:`Bearer ${jwt}`
          }
       })
       
       dispatch({type:ADD_TO_FAVORITE_SUCCESS,payload:data})
       console.log("added to favorite",data)


    }catch (error){
         dispatch({type:ADD_TO_FAVORITE_FAILURE,payload:error})
        console.log("error",error)
    }
}

export const logout = () => async (dispatch) => {
    try {
        localStorage.clear();
        dispatch({ type: LOGOUT }); 
        console.log("logout success");
    } catch (error) {
        console.log("error", error);
    }
};