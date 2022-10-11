import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import AllMeetups from './pages/AllMeetups';
import Favorites from './pages/Favorite';
import NewMeetup from './pages/NewMeetup';
import MainNaviation from './components/layouts/MainNavigation';

function App() {
  return (
    <div>
      <MainNaviation/>
      <Switch>
      <Route path='/' exact>
        <AllMeetups/>
      </Route>
      <Route path='/new-meetup'>
        <NewMeetup/>
      </Route>      
      <Route path='/favorites'>
        <Favorites/>
      </Route>      

      </Switch>
    </div>
  );
}

export default App;
