import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import './App.css'

import Home from './pages/Home'
import Rooms from './pages/Rooms'
import SingleRoom from './pages/SingleRoom'
import Error from './pages/Error'
import NavBar from './components/NavBar'

class App extends React.Component {
   render() {
      return (
         
         <Router>
            <NavBar></NavBar>
            <Switch>
               <Route path="/" exact Component={Home}></Route>
               <Route path="/rooms" Component={Rooms}></Route>
               <Route path="/room/:slug" Component={SingleRoom}></Route>
               <Route Component={Error}></Route>
            </Switch>
         </Router>
      );
   }
}
export default App;