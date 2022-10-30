// To use redux toolkit first excute the cmd in terminal npm install @reduxjs/toolkit

import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = { counter: 0, showCounter : true}

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        increment(state) {
            state.counter++; // can use this way but recommended to use as state.counter =  state.counter + 1;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        },

     }
})

const initialAuthState = { isAuthenticated: false }

const authSlice = createSlice({
    name: 'authentication',
    // initialState: { isAuthenticated: false } // can define this wa as well on the fly
    initialState: initialAuthState, 
    reducers: {
        login(state) {
            state.isAuthenticated = true
        },
        logout(state) {
            state.isAuthenticated = false
        },
    }
})

// Can use this way, it's totally allright if we have a single reducer
// const store = createStore(counterSlice.reducer); 

// But best approach to go with this way, as it works well when we have multiple reducers
const store = configureStore({
    reducer: { counter: counterSlice.reducer, auth: authSlice.reducer }
})
// configureStore merges all the reducers declared and make one big reducer and also you can just have only one configureStore not more than that

export const counterActions = counterSlice.actions; // Are called action creators
export const authActions = authSlice.actions;

export default store;

