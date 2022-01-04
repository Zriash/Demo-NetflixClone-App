import { Redirect, Route, Switch } from 'react-router-dom';
import classes from './App.module.scss';
import FullScreenMedia from './pages/fullScreenMedia/FullScreenMedia';
import HomePage from './pages/home/HomePage';

function App() {
  return (
    <Switch>
      <Route path='/' exact>
        <HomePage />
      </Route>
      <Route path='/play/:title'>
        <FullScreenMedia />
      </Route>
      <Route path='*'>
        <Redirect to='/' />
      </Route>
    </Switch>
  );
}

export default App;
