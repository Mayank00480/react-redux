import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const counter = useSelector(state => state.counter )
  const dispatch = useDispatch()
  const toggleCounterHandler = () => {};
  const IncrementCounter = () =>{
    dispatch({type : 'INC'})
  }
  const DecrementCounter = () => {
    dispatch({type : 'DEC'})
  }
 const DecrementCounterBy5 = () =>{
      dispatch({type : 'DECBY5'})
 }
 const IncrementCounterBy5 = () =>{
  dispatch({type : 'INCBY5'})
}
 
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>-- {counter} --</div>
      <div className = {classes.count}>
      <button onClick = {IncrementCounter}>Increment</button>
      <button onClick = {DecrementCounter}>Decrement</button>
      
      </div>
      <div className = {classes.count}>
      <button onClick = {IncrementCounterBy5}>IncrementBy5</button>
      <button onClick = {DecrementCounterBy5}>DecrementBy5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
