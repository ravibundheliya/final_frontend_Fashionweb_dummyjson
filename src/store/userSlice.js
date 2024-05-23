import { createSlice } from '@reduxjs/toolkit';

const getUserData = localStorage.getItem('userdata');
const loguser = localStorage.getItem('loguser');

const initialState = {
    value: getUserData ? JSON.parse(getUserData) : [],
    logindata: loguser ? JSON.parse(loguser) : null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        adduser: (state, action) => {
            state.value.push(action.payload);
            localStorage.setItem('userdata', JSON.stringify(state.value));
        },

        loginuser: (state, action) => {
            const user = state.value.find(item => item.email === action.payload.email && item.password === action.payload.password);
            if (user) {
                user.cart = user.cart || [];
                state.logindata = user;
                localStorage.setItem('userdata', JSON.stringify(state.value));
                localStorage.setItem('loguser', JSON.stringify(state.logindata));
            }
        },

        logoutuser: (state) => {
            state.logindata = null;
            localStorage.setItem('loguser', JSON.stringify(state.logindata));
        },

        userpushdata: (state, action) => {
            const check = state.logindata.cart.find(item => item.id === action.payload.id);
            if (check) {
                check.stock = action.payload.stock;
            } else {
                state.logindata.cart.push(action.payload);
            }

            const storeIndex = state.value.findIndex((item) => item.email === state.logindata.email)
            if (storeIndex !== -1) {
                state.value[storeIndex].cart = state.logindata.cart;
            }

            localStorage.setItem('loguser', JSON.stringify(state.logindata));
            localStorage.setItem('userdata', JSON.stringify(state.value));
        },

        userdeletedata: (state, action) => {
            state.logindata.cart = state.logindata.cart.filter((item) => item.id !== action.payload)
            const storeIndex = state.value.findIndex((item) => item.email === state.logindata.email)
            if (storeIndex !== -1) {
                state.value[storeIndex].cart = state.value[storeIndex].cart.filter((item) => item.id !== action.payload);
            }
            localStorage.setItem('loguser', JSON.stringify(state.logindata));
            localStorage.setItem('userdata', JSON.stringify(state.value));
        },

        userclearall: (state) => {
            state.logindata.cart = []
            const storeIndex = state.value.findIndex((item) => item.email === state.logindata.email)
            if (storeIndex !== -1) {
                state.value[storeIndex].cart = [];
            }
            localStorage.setItem('loguser', JSON.stringify(state.logindata));
        },
        userpushwish: (state, action) => {
            const check = state.logindata.wishlist.find((item) => item.id === action.payload.id);
            if (check) {
                check.stock = action.payload.stock;
            }
            else {
                state.logindata.wishlist.push(action.payload);
            }

            const storeIndex = state.value.findIndex((item) => item.email === state.logindata.email);
            if (storeIndex !== -1) {
                state.value[storeIndex].wishlist = state.logindata.wishlist;
            }
            localStorage.setItem('userdata', JSON.stringify(state.value));
            localStorage.setItem('loguser', JSON.stringify(state.logindata));
        },
        userdeletewish: (state, action) => {
            state.logindata.wishlist = state.logindata.wishlist.filter((item) => item.id !== action.payload);
            const storeIndex = state.value.findIndex((item) => item.email === state.logindata.email);
            if (storeIndex !== -1) {
                state.value[storeIndex].wishlist = state.value[storeIndex].wishlist.filter((item) => item.id !== action.payload);
            }
            localStorage.setItem('userdata', JSON.stringify(state.value));
            localStorage.setItem('loguser', JSON.stringify(state.logindata));
        },
        userclearwish: (state, action) => {
            state.logindata.wishlist = [];
            const storeIndex = state.value.findIndex((item) => item.email === state.logindata.email);
            if (storeIndex !== -1) {
                state.value[storeIndex].wishlist = [];
            }
            localStorage.setItem('userdata', JSON.stringify(state.value));
            localStorage.setItem('loguser', JSON.stringify(state.logindata));
        }
    },
});

// Action creators are generated for each case reducer function
export const { adduser, loginuser, logoutuser, userpushdata, userdeletedata, userclearall, userpushwish, userdeletewish, userclearwish } = userSlice.actions;

export default userSlice.reducer;
