import { createStore } from 'redux'

const initialState = { counter: 0, showCounter : true}

const counterReducer =  (state = initialState, action) => {
    if(action.type === 'increment') {
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter,
        }


        // Imp points: 
        // 1. Never mutate or change the original state, always return a brand new object
        // For eg : state.counter++; return state
        // This can lead unintended bugs and becomes harder in real time scenario, can have unwanted bugs
        // 2. Updated state data always overwrites but not replace, that's on of the side effect in redux
    }

    if(action.type === 'increaseby5') {
        return {
            // counter: state.counter + 5, // But this is not the standard way to do, instead
            counter: state.counter + action.amount,
            showCounter: state.showCounter,
        }
    }

    if(action.type === 'decrement') {
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter,
        }
    }

    // Working with states using redux (toggle functionality)
    if(action.type === 'toggle') {
        return {
            showCounter: !state.showCounter, // It means set to false on toggle
            counter: state.counter
        }
    }

    return state;
}

const store = createStore(counterReducer);

export default store;

