import React from 'react';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={() => <div>Hello</div>} />
        <Route component={() => <div>Not found</div>} />
      </Switch>
    </div>
  );
}

export default App;
