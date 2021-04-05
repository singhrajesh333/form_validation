import logo from './logo.svg';
import './App.css';
import Forms from './Forms';
import SignIn from './SignIn';
import {BrowserRouter, Route, Switch} from 'react-router-dom'


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Switch>

  
 <Route exact path='/' component={SignIn}/>
  <Route exact path='/Forms' component={Forms}/>
    </Switch>
   
   </BrowserRouter>
    </div>
  );
}

export default App;
