import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';

const Home =require('../Home')

export default class RouterConfig extends React.Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path="./" component={Home}></Route>
                </Switch>
            </HashRouter>
        )
    }
}