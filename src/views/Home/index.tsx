
import React from 'react';
import { useState, useEffect } from 'react';
import ShopList from '../../components/ShopList';
import newApi from '../../server/newApi';
export default function Home(props: any) {

    const [list, setList] = useState([])

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
        props.history.push('/login')
    }

    return (
        <div>
            <div>
                <button onClick={() => toLogin()}>登陆</button>
            </div>
            <ShopList list={list}></ShopList>

        </div>
    )
}
