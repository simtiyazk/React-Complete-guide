import { Component } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { connect } from 'react-redux'; // This is for Class based component

import { counterActions } from '../store/redux-toolkit';

import classes from './Counter.module.css';

const Counter = () => {
  const counter = useSelector(state => state.counter.counter)
  const showCounter = useSelector (state => state.counter.showCounter)

  const dispatch = useDispatch();

  const incrementHandler = () => {
    // dispatch({type: 'increment'});
    dispatch(counterActions.increment()); // Using Redux toolkit
  }

  const increaseHandler = () => {
    //dispatch({ type: 'increaseby5', amount: 5})
    // amount is called a payload attached to the action. Name should be same as defined in reducer function

    dispatch(counterActions.increase(5)); // { type: 'SOME_UNIQUE_IDENTIFIER', payload: 5 } // Using Redux toolkit
  }

  const decrementHandler = () => {
    // dispatch({type: 'decrement'});
    dispatch(counterActions.decrement()); // Using Redux toolkit
  }

  // Working with states using redux
  const toggleCounterHandler = () => {
    // dispatch({ type: 'toggle'})
    dispatch(counterActions.toggleCounter()); // Using Redux toolkit
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// // Redux using Class-based component

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }
//   decrementHandler() {
//     this.props.decrement();
//   }
//   toggleCounterHandler() {

//   }

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter
//   }
// }

// const mapDispatchToProps = (dispatch) => {

//   return{
//     increment: () => dispatch({type: 'increment'}),
//     decrement: () => dispatch({type: 'decrement'}),
//   }

// };

// // For Class-based component
// export default connect(mapStateToProps, mapDispatchToProps)(Counter); 
