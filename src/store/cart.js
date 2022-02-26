import { createSlice } from "@reduxjs/toolkit"
import sendCartData, { fetchCartData } from "./cart-effects"

const initialState = { items: [],
    totalQuantity: 0,
    toggle: false,
    status: '',
    httpPutError: null
}
    

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        replace(state, actions) {
            state.items = [...actions.payload]
        },

        add(state, actions) {
            const itemIndex = actions.payload.index
            state.items[itemIndex].quantity = state.items[itemIndex].quantity + 1
            state.items[itemIndex].total = state.items[itemIndex].quantity * state.items[itemIndex].price
            state.totalQuantity++
        },
        remove(state, actions) {
            
            const itemIndex = actions.payload.index
            if(state.items[itemIndex].quantity > 1 ) {
            state.items[itemIndex].quantity = state.items[itemIndex].quantity - 1
            state.items[itemIndex].total = state.items[itemIndex].quantity * state.items[itemIndex].price
            state.totalQuantity--
            }
            else {
                state.items.splice(itemIndex, 1)
            }
        },
        addToCart(state, actions) {
            const newItem = actions.payload

            const existingItem = state.items.find(item => item.id === newItem.id)

             if(existingItem) {
               existingItem.quantity++
               existingItem.total = existingItem.price * existingItem.quantity

            }
            else {
                state.items.push({
                    id: newItem.id,
                    title: newItem.title,
                    price: newItem.price,
                    quantity: 1,
                    total: newItem.price


                })
            }
            state.totalQuantity++
        },
        toggleCart(state) {
            state.toggle = !state.toggle
        },

        setError(state, actions) {
            state.httpPutError = actions.payload
        }

    },

    extraReducers: (builder) => {
        builder.addCase(sendCartData.pending, (state, action) => {
            state.status = 'Pending'
        });
        builder.addCase(sendCartData.fulfilled, (state, action) => {
            state.status = 'Complete';
        });

        builder.addCase(sendCartData.rejected, (state, action) => {
            state.status = 'Error'
        });
        builder.addCase(fetchCartData.fulfilled, (state, action) => {
             state.items = action.payload.cart || []
             state.totalQuantity= action.payload.totalQuantity
        })
    }
}) 

export const cartActions = cartSlice.actions

export default cartSlice.reducer;