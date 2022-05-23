
import React from 'react';
import { useState, useEffect } from 'react';
import newApi from '../../server/newApi';
export default function Test(props: any) {

    const [count, setCount] = useState(0)
    useEffect(() => {
        setCount(1)
        console.log(1, count)
        setTimeout(() => {
            setCount(2)
            console.log(2)
        }, 0)

    }, [])

    return (
        <div>

        </div>
    )
}
