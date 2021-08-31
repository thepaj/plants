import { Route, Switch } from 'react-router';

import Navigation from './pages/Navigation';
import About from './pages/About';
import Home from './pages/Home';
import AddPlant from './pages/AddPlant';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className='content'>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/add" component={AddPlant} />
            <Route path="/about" component={About} />
            <Route component={Home} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
