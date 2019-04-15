import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import History from './components/History';
import Error from './components/Error';
import Navigation from './components/Navigation';


// const NewRoute =() => {
//   return(
//     <div>
//       <p>
//         New Route
//       </p>
//     </div>
//   )
// }

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/about" component={About}/>
          <Route path="/notre-histoire" component={History}/>
          <Route component={Error} />
          {/* <Route path ="/new" component={NewRoute} /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
