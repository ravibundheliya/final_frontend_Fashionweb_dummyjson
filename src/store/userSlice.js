import { createSlice } from '@reduxjs/toolkit'

const getUserData = localStorage.getItem('userdata');
const loguser = localStorage.getItem('loguser');

const initialState = {
    value: getUserData ? JSON.parse(getUserData) : [],
    logindata: loguser ? JSON.parse(loguser) : null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

        adduser: (state, action) => {
            state.value.push(action.payload);
            localStorage.setItem('userdata', JSON.stringify(state.value));
        },

        loginuser: (state, action) => {
            const user = state.value.find(item => item.email === action.payload.email && item.password === action.payload.password)
            state.logindata = user || null;
            localStorage.setItem('loguser', JSON.stringify(state.logindata));
        },
        
        logoutuser: (state) => {
            state.logindata = null;
            localStorage.setItem('loguser', JSON.stringify(state.logindata));
        },
    },
})


// Action creators are generated for each case reducer function
export const { adduser, loginuser, logoutuser } = userSlice.actions

export default userSlice.reducer