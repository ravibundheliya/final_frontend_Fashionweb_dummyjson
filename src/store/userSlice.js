import { createSlice } from '@reduxjs/toolkit';

const getUserData = localStorage.getItem('userdata');
const loguser = localStorage.getItem('loguser');
const initialState = {
    value: getUserData ? JSON.parse(getUserData) : [],
    logindata: loguser ? JSON.parse(loguser) : null,
};
const updateLocalStorage = (state) => {
    localStorage.setItem('userdata', JSON.stringify(state.value));
    localStorage.setItem('loguser', JSON.stringify(state.logindata));
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        adduser: (state, action) => {
            state.value.push(action.payload);
            updateLocalStorage(state);
        },

        loginuser: (state, action) => {
            const user = state.value.find(item => item.email === action.payload.email && item.password === action.payload.password);
            if (user) {
                user.cart = user.cart || [];
                state.logindata = user;
                updateLocalStorage(state);
            }
        },

        logoutuser: (state) => {
            state.logindata = null;
            updateLocalStorage(state);
        },

        resetpassword: (state, action) => {
            const storeIndex = state.value.findIndex((item) => item.email === state.logindata.email);
            state.logindata.password = action.payload;
            if (storeIndex !== -1) {
                state.value[storeIndex].password = state.logindata.password;
            }
            updateLocalStorage(state);
        },

        addUserAddress: (state, action) => {
            const storeIndex = state.value.findIndex((item) => item.email === state.logindata.email);
            let checkAddress = state.logindata.address.find((item) => item.label === action.payload.label);
            if (checkAddress) {
                checkAddress.area = action.payload.area;
                checkAddress.city = action.payload.city;
                checkAddress.country = action.payload.country;
                checkAddress.state = action.payload.state;
                checkAddress.postcode = action.payload.postcode;
            } else {
                state.logindata.address.push(action.payload);
            }
            if (storeIndex !== -1) {
                state.value[storeIndex].address = state.logindata.address;
            }
            updateLocalStorage(state);
        },

        deleteaddress: (state, action) => {
            const storeIndex = state.value.findIndex((item) => item.email === state.logindata.email);
            state.logindata.address = state.logindata.address.filter((item) => item.label !== action.payload);
            if (storeIndex !== -1) {
                state.value[storeIndex].address = state.logindata.address;
            }
            updateLocalStorage(state);
        },

        userpushdata: (state, action) => {
            const storeIndex = state.value.findIndex((item) => item.email === state.logindata.email);
            const check = state.logindata.cart.find(item => item.id === action.payload.id);
            if (check) {
                check.cartqty = action.payload.cartqty;
                check.totalprice = action.payload.totalprice;
            } else {
                state.logindata.cart.push(action.payload);
            }
            if (storeIndex !== -1) {
                state.value[storeIndex].cart = state.logindata.cart;
            }
            updateLocalStorage(state);
        },

        userdeletedata: (state, action) => {
            const storeIndex = state.value.findIndex((item) => item.email === state.logindata.email);
            state.logindata.cart = state.logindata.cart.filter((item) => item.id !== action.payload);
            if (storeIndex !== -1) {
                state.value[storeIndex].cart = state.logindata.cart;
            }
            updateLocalStorage(state);
        },

        userclearall: (state) => {
            const storeIndex = state.value.findIndex((item) => item.email === state.logindata.email);
            state.logindata.cart = [];
            if (storeIndex !== -1) {
                state.value[storeIndex].cart = [];
            }
            updateLocalStorage(state);
        },

        userpushwish: (state, action) => {
            const storeIndex = state.value.findIndex((item) => item.email === state.logindata.email);
            const check = state.logindata.wishlist.find((item) => item.id === action.payload.id);
            if (check) {
                check.stock = action.payload.stock;
            } else {
                state.logindata.wishlist.push(action.payload);
            }
            if (storeIndex !== -1) {
                state.value[storeIndex].wishlist = state.logindata.wishlist;
            }
            updateLocalStorage(state);
        },

        userdeletewish: (state, action) => {
            const storeIndex = state.value.findIndex((item) => item.email === state.logindata.email);
            state.logindata.wishlist = state.logindata.wishlist.filter((item) => item.id !== action.payload);
            if (storeIndex !== -1) {
                state.value[storeIndex].wishlist = state.logindata.wishlist;
            }
            updateLocalStorage(state);
        },

        userclearwish: (state) => {
            const storeIndex = state.value.findIndex((item) => item.email === state.logindata.email);
            state.logindata.wishlist = [];
            if (storeIndex !== -1) {
                state.value[storeIndex].wishlist = [];
            }
            updateLocalStorage(state);
        },

        userPushOrder: (state, action) => {
            const storeIndex = state.value.findIndex((item) => item.email === state.logindata.email);
            const check = state.logindata.orders.find((item) => item?.status === "pending");
            if (check) {
                check.status = action.payload.status;
                check.shippingAddress = action.payload.shippingAddress;
                check.subTotal = action.payload.subTotal;
                check.products = action.payload.products;
                check.shippingCharges = action.payload.shippingCharges;
                check.couponCode = action.payload.couponCode;
                check.grandTotal = action.payload.grandTotal;
                check.orderDate = action.payload.orderDate;
            } else {
                state.logindata.orders.push(action.payload);
            }
            if (storeIndex !== -1) {
                state.value[storeIndex].orders = state.logindata.orders;
            }
            updateLocalStorage(state);
        },
    },
});

// Action creators are generated for each case reducer function
export const {
    adduser,
    loginuser,
    logoutuser,
    userpushdata,
    userdeletedata,
    userclearall,
    userpushwish,
    userdeletewish,
    userclearwish,
    resetpassword,
    addUserAddress,
    deleteaddress,
    userPushOrder
} = userSlice.actions;

export default userSlice.reducer;
