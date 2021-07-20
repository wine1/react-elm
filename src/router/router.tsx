import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import loadable from '@loadable/component'
const Home = loadable(() => import("../views/Home"))
const Shop = loadable(() => import("../views/Shop"))

export default class RouterConfig extends React.Component {
    render() {
        return (
            <HashRouter>
             
                <Switch>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/shop" component={Shop}></Route>
                </Switch>
                </HashRouter>
        )
    }
}