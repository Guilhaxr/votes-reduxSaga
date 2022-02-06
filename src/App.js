import { useSelector } from "react-redux";
import Counter from "./Counter";
import './app.css'


function App() {
  const people = ['Guilherme', 'Lara', 'Kira']
  
  

  const counter = useSelector((state)=> state.counter.count)

  return (
    <div className='main'>
      <h1>Votes</h1>
      <h2>Total count: {counter}</h2>
      <div className='vote__each'>
        {people.map((element)=> 
          <Counter name= {element} />
        )}
      </div>
    </div>
  );
}

export default App;
