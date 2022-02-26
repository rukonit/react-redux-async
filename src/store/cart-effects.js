import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"


const sendCartData = createAsyncThunk(
    'cart/postAll', 
     async (data) => {
         const response = await axios.put('https://redux-cart-61d15-default-rtdb.firebaseio.com/cart.json',
    data
    ).catch(error => {console.log(error)})
    return response.data
     }
    )

const fetchCartData = createAsyncThunk(
        'cart/getAll', 
         async () => {
        const response = await axios.get('https://redux-cart-61d15-default-rtdb.firebaseio.com/cart.json'
        ).catch(error => {console.log(error)})
        return response.data
         }
        )

export {fetchCartData}
export default sendCartData;