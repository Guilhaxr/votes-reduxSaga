import { useDispatch } from "react-redux";
import { increment, decrement } from "./redux/ducks/counter";
import { useState } from "react";
import './Counter.css'



const Counter = (props) => {

    const [vote, setVote] = useState(0);

    const dispatch = useDispatch();


    const handleIncrement = () =>{
        dispatch(increment())
        setVote(vote + 1)
    }

    const handleDecrement = () =>{
        dispatch(decrement())
        setVote(vote - 1)
    }


    return(
        <div className="voter__card">
            <div>
                <h3>{props.name}</h3>
                <h4>Personal vote: {vote}</h4>
                <div>
                    <button onClick={handleIncrement}>+</button>
                    <button onClick={handleDecrement}>-</button>
                </div>
            </div>
        </div>
    )
}

export default Counter;