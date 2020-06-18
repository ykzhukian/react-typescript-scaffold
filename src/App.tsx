import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('@/views/Home'));

const App = () => (
  <main className="app">
    <Router>
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Suspense>
    </Router>
  </main>
);

export default App;
