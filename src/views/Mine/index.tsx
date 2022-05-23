import React, { useRef } from 'react';
import { useState, useEffect } from 'react';
import newApi from '../../server/newApi';

export default function Mine() {
    const [fileValue, setFileValue] = useState({})
    const inputEl = useRef(null)
    useEffect(() => {

    }, [])

    const handleFileChange = async (e: any) => {
        // console.log(111, e)
        const file = e.target.files
        const data = new FormData();
        data.append('file', file[0]);  //相当于 input:file 中的name属性
        // setFileValue(data)  
        const res = await newApi.upload({ data })
        console.log(111, res)
    }
    const submit = async () => {
        const res = await newApi.upload({ data: fileValue })
        console.log(111, res)
    }

    const onButtonClick = () => {
        // @ts-ignore
        inputEl.current.focus()
        console.log(inputEl)
    }
    return (<div>
        <div>文件上传</div>
        {/* form 上传 利用form表单的enctype属性可以把表单提交的对象设置为多媒体资源，然后通过inuput:file就可以实现文件上传的功能 */}
        {/* 这个solution相对便捷有效而且还不用考虑跨域的问题，毕竟我们上传的文件终究还是要访问API接口；不过这种方法还有一个不方便的地方，就是form表单会默认跳转也就是会在浏览器访问你所提交文件的那个接口，这个行为处理起来很麻烦。 */}
        <form action="http://172.30.71.29:8088/api/user/updateUserAvatar" method="post" encType="multipart/form-data">
            <input type="file" name="file" value='' />
            <input type="submit" value="提交" />
        </form>

        {/* 调接口上传 */}
        {/* 这种方式会有跨域问题 */}

        <div>文件上传</div>
        <div>
            <input type="file" name="file" onChange={(e: any) => handleFileChange(e)} />
            <input type="button" value="提交" onClick={submit} />
        </div>

        <div>输入框</div>
        <div>
            <input type="text" ref={inputEl} />
            <button onClick={onButtonClick}>Focus the input</button>
        </div>

    </div>)
}