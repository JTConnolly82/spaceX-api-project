import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Nav from './Nav';
import Roadster from './Roadster';
import Missions from './Missions';



const App = () => {
  return (
    <div>
    <Nav />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/Roadster" component={Roadster}/>
        <Route path="/Missions" component={Missions}/>
      </Switch>
    </div>
  )
}


export default App;