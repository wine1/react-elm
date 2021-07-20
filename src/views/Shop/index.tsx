import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom'
import API from "../../server/api"

class Shop extends React.Component<RouteComponentProps> {
    render() {
        return (
            <div>
                helloworld
            </div>
        )
    }

    componentDidMount(){
        this.initData()
    }

    initData=async()=>{
        let res=await API.getshop()
        console.log(res)
    }
}

export default withRouter(Shop)