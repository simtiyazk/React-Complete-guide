const redux = require('redux');

// reducer function, it shpuld be pure JS function (means it doesn't accept API or sessio/local storages), same input performs to provide same output result
const counterReducer = (state = {counter: 0}, action) => {
    if(action.type === 'increment') {
        return {
            counter: state.counter + 1
        }
    }
    if(action.type === 'decrement') {
        return {
            counter: state.counter - 1,
        }
    }
    return state;
}

// createStore function
const store = redux.createStore(counterReducer);

// Subscriber fucntion to store the latest state
const counterSubscriber = () => {
    const latestState = store.getState();
    // getstate() method gets the latest state stored in the store created by createStore function
    console.log(latestState)
}

store.subscribe(counterSubscriber);

// dispatch function to dispatch the latest state to action and then forwards to reducer function to upate the state and result out the updated state/data
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' });


// Since this has just js file so, to run this js project you should run cmd node redux-demo.js in the terminal to show the log