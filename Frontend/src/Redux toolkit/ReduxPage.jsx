import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { decrement, increment } from './features/counterSlice';
import { setUser } from './features/userSlice';

const ReduxPage = () => {
    const dispatch = useDispatch();

    const count = useSelector((state) => state.counter.value);
    const user = useSelector((state) => state.user.value);

    const [name, setName] = useState("Anuj");

  return (
    <div>
      {/* <h1>{count}</h1>

      <button onClick={() => {
        dispatch(increment())
      }}>
        increment
      </button>

      <button onClick={() => {
        dispatch(decrement())
      }}>
        decrement
      </button> */}
      <h1>Name: {user.userName}</h1>

      <br />

        <input type="text"
               value={name}
               onChange={(e) => setName(e.target.value)}
       />

       <button onClick={() => {
          dispatch(setUser(name))
       }}>
          Set Name
        </button>

    </div>
  )
}

export default ReduxPage
