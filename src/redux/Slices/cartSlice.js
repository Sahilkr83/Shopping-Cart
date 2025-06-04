import { createSlice } from "@reduxjs/toolkit";



export const cartSlice = createSlice({

    name: 'cart',
    initialState:[],
    reducers:{
        add:(state,actions) =>{
            state.push(actions.payload);
        },
        remove:(state,actions)=>{
            return state.filter((item => item.id !== actions.payload))
        },
        removeAll: (state) => {
            return []
        }

    }
})

export const {add, remove, removeAll} = cartSlice.actions

export default cartSlice.reducer