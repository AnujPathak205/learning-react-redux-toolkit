import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: "user",

    initialState:{
        value: {
            userName: "Anuj",
            password: "123"
        }
    },

    reducers:{
        setUser: (state,action) => {
            state.value.userName = action.payload
        }
    }
})

export const {setUser} = userSlice.actions
export default userSlice.reducer