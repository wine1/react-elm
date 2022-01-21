import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import loadable from '@loadable/component'
const Home = loadable(() => import("../views/Home"))
const Shop = loadable(() => import("../views/Shop"))
const Cart = loadable(() => import("../views/Cart"))
const Mine = loadable(() => import("../views/Mine"))
const Login = loadable(() => import("../views/Login"))
export default class RouterConfig extends React.Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/shop" component={Shop}></Route>
                    <Route path="/cart" component={Cart}></Route>
                    <Route path="/mine" component={Mine}></Route>
                    <Route path="/login" component={Login}></Route>
                </Switch>
            </HashRouter>
        )
    }
}