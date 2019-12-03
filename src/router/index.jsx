import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import App from '../App';
import Login from '../view/login/login';
import Index from '../view/index/main';
import Home from '../view/home/index';
import News from '../view/news/index';
class Routers extends React.Component {
  render() {
    return (
      <App>
        <BrowserRouter>
          <Switch>
            <Route path='/' exact render={()=> (
              <Redirect to={'/login'}/>
            )}/>
            <Route path="/login" exact={true} component= {Login} />
            <Route path="/" render={()=>
                <Index>
                    <Switch>
                        <Route path='/home' exact={true} component={Home} />
                        <Route path="/news/list" exact={true} component={News} />
                    </Switch>
                </Index>
              } />
          </Switch>
        </BrowserRouter>
      </App>
    )
  }
}

export default Routers;
