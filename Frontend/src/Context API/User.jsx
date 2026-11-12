import React, { useContext, useReducer, useRef } from 'react'
import { UserContext } from './contexts/UserProvider';

const User = () => {
    const {user,setUser} = useContext(UserContext);

    const reducer = (state, action) => {
        console.log(action)


        if (action.type == "inc") {
            return state + 1;
        }

        if (action.type == "dec") {
            return state - 1;
        }

        return state;
    }

    const [count, dispatch] = useReducer(reducer,0);

  return (
    <>
        <h1>Count: {count}</h1>

        <button 
            onClick={() => dispatch({type:"inc"})}
        >
            +
        </button>

        <button
            onClick={() => dispatch({type:"dec"})}
        >
            -
        </button>
    </>
  )
}

export default User
