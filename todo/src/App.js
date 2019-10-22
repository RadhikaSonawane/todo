import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Create from './components/create.component';
import Edit from './components/edit.component';
import Index from './components/index.component';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <div className="container-full">
          <nav className="navbar navbar-expand navbar-dark bg-dark">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
              <ul className="container navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item text-white">
                  <Link to={'/create'} className="nav-link mr-3 btn btn-dark">Create</Link>
                </li>
                <li className="nav-item text-white">
                  <Link to={'/index'} className="nav-link btn btn-dark">Todo List</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Switch>
              <Route exact path='/create' component={ Create } />
              <Route path='/edit/:id' component={ Edit } />
              <Route path='/index' component={ Index } />
          </Switch>
        </div>
        </div>
      </Router>
    );
  }
}

export default App;