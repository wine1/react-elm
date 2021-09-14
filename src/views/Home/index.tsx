import React from 'react';
import { useState } from 'react';
import counter from "./store"
import { createStore } from "redux";
let store = createStore(counter)
export default function Home() {
    const [num, setCounter] = useState(0)

    const increment = () => {
        store.dispatch({ type: 'INCREMENT' })
        // @ts-ignore
        setCounter(store.getState())
    }
    const decrement = () => {
        store.dispatch({ type: 'DECREMENT' })
        // @ts-ignore
        setCounter(store.getState())
    }
    return (
        <div>
            <div>VALUE:{num}</div>
            <button onClick={() => increment()}>increment</button>
            <button onClick={() => decrement()}>decrement</button>
        </div>
    )
}