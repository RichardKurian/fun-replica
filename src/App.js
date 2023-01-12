
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About  from './components/About';
import Products from './components/Products';
import Login from './components/Login';
import LoggedIn from './components/LoggedIn';

function App() {
  return (
    <Router>

    <div className="App">
    
    <Navbar></Navbar>

    <Switch>
    <Route path="/" exact component={Home}/>

   <Route path="/about" exact component={About}/>

   <Route path="/products"  exact component={Products} />

    <Route path="/login" exact component={Login}/>

    <Route path="/inner" exact component={LoggedIn}/>
    </Switch>

    </div>
    </Router>
  );
}

export default App;
