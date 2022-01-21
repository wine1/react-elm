import React from 'react';
import { useState } from 'react';
import newApi from '../../server/newApi';
import Utils from '../../utils/utils';
export default function Login() {
    const [usernameValue, setUsernameValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')
    const login = async () => {
        let data = { username: usernameValue, password: passwordValue }
        await newApi.login({ data }).then((res: any) => {
            // console.log('login', res)
            if (res.data) {
                Utils.setLocalStorage('userInfo', { isLogin: true, ...res.data })
            }

        }).catch((err: any) => {
            console.log('err', err)
        })
    }
    const handleChange1 = (e: any) => {
        setUsernameValue(e.target.value)
    }
    const handleChange2 = (e: any) => {
        setPasswordValue(e.target.value)
    }

    const getdata = async () => {
        let data = { username: usernameValue, password: passwordValue }
        await newApi.getcategory({ data }).then((res: any) => {
            console.log('login', res)
            if (res.data) {
                Utils.setLocalStorage('getcategory', res.data)
            }

        }).catch((err: any) => {
            console.log('err', err)
        })
    }
    return (
        <div>
            <div>
                <div>用户名</div>
                <input type="div" value={usernameValue} onChange={(e) => handleChange1(e)} />
            </div>
            <div>
                <div>密码</div>
                <input type="password" value={passwordValue} onChange={(e) => handleChange2(e)} />
            </div>
            <div onClick={login}><div>login</div></div>

            <div onClick={getdata}><div>getdata</div></div>
        </div >
    )
}