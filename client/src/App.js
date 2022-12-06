import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage';
import NavBar from './components/NavBar';
import Home from './components/Home';
import CreatePokemon from './components/CreatePokemon';
import Detail from './components/Detail';
import Contacts from './components/Contacts';


function App() {
  return (
    <BrowserRouter>
      
      
      <Switch>
        <Route exact path={'/'}>
          <LandingPage/>
        </Route>
        
        <Route path='/home' component={Home} />
        <Route exact path='/create' component={CreatePokemon}/>
        <Route path='/detail/:id' component={Detail}/>
        <Route path='/contacts' component={Contacts}/>
     </Switch>   
    
    
    </BrowserRouter>
  );
}

export default App;
