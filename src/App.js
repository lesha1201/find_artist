import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/home/Home';
import Artist from './pages/artist/Artist';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/artist/:id" exact component={Artist} />
        <Route component={() => <div>Not found</div>} />
      </Switch>
    </div>
  );
}

export default App;
