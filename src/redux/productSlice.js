import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart : [],
    cartTotalAmount : 0,
    cartTotalQuantity : 0
}

const productSlice = createSlice({
    name : "amazon",
    initialState,
    reducers : {
        addCart : (state, action) => {
            const findItem = state.cart.findIndex(item => item.id === action.payload.id);
            if(findItem >= 0){
                state.cart[findItem].cartQuantity += 1
            }else{
                const tempProduct = {...action.payload, cartQuantity : 1}
                state = state.cart.push(tempProduct);
            }
        },
        removeCart : (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload.id)
        },
        decreaseCart : (state, action) => {
            const findItem = state.cart.findIndex(item => item.id === action.payload.id);
            if(state.cart[findItem].cartQuantity > 1){
                state.cart[findItem].cartQuantity -= 1
            }else if (state.cart[findItem].cartQuantity === 1){
                state.cart = state.cart.filter((item) => item.id !== action.payload.id);
            }
        },
        clearAll : (state, action) => {
            state.cart = []
        }
    },
});

export default productSlice.reducer;
export const { addCart, removeCart, decreaseCart, clearAll } = productSlice.actions;