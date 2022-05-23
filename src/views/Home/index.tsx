
import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ShopList from '../../components/ShopList';
import newApi from '../../server/newApi';
export default function Home() {

    const [list, setList] = useState([])
    const history = useHistory()
    useEffect(() => {
        initData()
    }, [])

    const initData = async () => {
        await newApi.getShop({}).then((res: any) => {
            if (res?.data) {
                setList(res.data)
            }
        }).catch()
    }


    const toLogin = () => {
        history.push('/login')
    }

    function test<T>(value: T): T {
        return value
    }
    test(123)
    test<string>('111')

    type T = {
        aa: {
            s: string,
            u: number,
            c: boolean,
            e: () => void
        },
        bb: number
    }
    const a = <K extends keyof T>(value: T[K]) => {
        return value
    }
    a(1)
    a({ s: 'string', u: 1, c: false, e: () => { } })

    interface Todo {
        title: string;
        description: string;
        completed: boolean;
    }

    type TodoPreview = Pick<Todo, "title" | "completed">;

    const todo: TodoPreview = {
        title: "Clean room",
        completed: false,
        // description: '1'   对象文字可以只指定已知属性，并且“description”不在类型“Pick<Todo, "title" | "completed">”中。
    };

    return (
        <div>
            <div>
                <button onClick={() => toLogin()}>登陆</button>
            </div>
            <ShopList list={list}></ShopList>

        </div>
    )
}
