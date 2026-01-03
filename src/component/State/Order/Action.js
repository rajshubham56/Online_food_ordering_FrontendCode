import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_USERS_ORDERS_FAILURE, GET_USERS_ORDERS_REQUEST, GET_USERS_ORDERS_SUCCESS } from "./ActionTypes";
import {api} from "../../../config/api";

export const createOrder=(reqData)=>{
    return async(dispatch) => {
        dispatch({type:CREATE_ORDER_REQUEST});
        try{
        const { data } = await api.post(`api/order`,menu,{
            headers: {
                Authorization:`Bearer ${reqData.jwt}`
            },
        });
        console.log("created order data", data)
        dispatch({type:CREATE_ORDER_SUCCESS,payload:data});
    } catch (error){
        console.log("catch error", data)
        dispatch({type:CREATE_ORDER_FAILURE, payload:error});
    }
    }   
}

export const getUsersOrder=(jwt)=>{
    return async(dispatch) => {
        dispatch({type:GET_USERS_ORDERS_REQUEST});
        try{
        const { data } = await api.get(`api/order/user`,menu,{
            headers: {
                Authorization:`Bearer ${jwt}`,
            },
        });
        console.log("users order", data)
        dispatch({type:GET_USERS_ORDERS_SUCCESS,payload:data});
    } catch (error){
        console.log("catch error", data)
        dispatch({type:GET_USERS_ORDERS_FAILURE, payload:error});
    }
    };
};

