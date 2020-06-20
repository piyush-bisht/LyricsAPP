import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/layouts/navbar';
import Index from './components/layouts/Index';
import Lyrics from './components/tracks/lyrics';

import './App.css';

import {Provider} from "./context";
class App extends React.Component {
  render(){
    return (
      <Provider>
      <Router>
        <React.Fragment>
            <Navbar/>
            <div className="container">
              
              <Switch>
                  <Route exact path="/" component={Index}/>
        
                  <Route exact path="/lyrics/track/:id" component={Lyrics}/>
                  
              </Switch>
            </div>
        </React.Fragment>
      </Router> 
      </Provider>
  );
  }
  
}

export default App;
