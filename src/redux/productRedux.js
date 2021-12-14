import { createSlice } from '@reduxjs/toolkit'

const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
        isFething: false,
        error: false
    },
    reducers: {
        getProductStart: (state) => {
            state.isFething = true
            state.error = false
        },
        getProductSuccess: (state, action) => {
            state.isFething = false
            state.products = action.payload
        },
        getProductFailure: (state, action) => {
            state.isFething = false
            state.error = true
        }

    },
})

export const { getProductStart, getProductSuccess, getProductFailure } = productSlice.actions
export default productSlice.reducer