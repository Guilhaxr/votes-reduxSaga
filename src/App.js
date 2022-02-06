import { useDispatch, useSelector } from "react-redux";
import Counter from "./Counter";
import './app.css';
import {useEffect} from 'react';
import {getUser} from './redux/ducks/user';


function App() {


  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getUser())
  }, [dispatch]);

  const people = ['Guilherme', 'Lara', 'Kira'];

  const user = useSelector((state)=> state.user.user);
  console.log(user)

  const counter = useSelector((state)=> state.counter.count);

  return (
    <div className='main'>
      <h1>Votes</h1>
      <h2>Total count: {counter}</h2>
      <div className='vote__each'>
        {people.map((element)=> 
          <Counter name={element} />
        )}
      </div>
    </div>
  );
}

export default App;
