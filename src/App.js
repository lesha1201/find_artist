import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.scss';

import Home from './pages/home/Home';
import Artist from './pages/artist/Artist';
import Background from './components/Background';

function App() {
  return (
    <div>
      <Background />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/artist/:name" exact component={Artist} />
        <Route component={() => <div>Not found</div>} />
      </Switch>
    </div>
  );
}

export default App;
