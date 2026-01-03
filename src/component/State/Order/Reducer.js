import { GET_USERS_ORDERS_FAILURE, GET_USERS_ORDERS_SUCCESS } from "./ActionTypes";



const initialState = {
  loading: false,
  orders: [],
  notifications: [],
  error: null,
};

export const orderReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case GET_USERS_ORDERS_SUCCESS:
        return {...state, error: null, loading: true}

    case GET_USERS_ORDERS_SUCCESS:
      return { ...state, loading: false, error: null, orders: payload };

    case GET_USERS_ORDERS_FAILURE:
        return { ...state, loading: false, error: payload };
    
    default:
      return state;
  }
};
