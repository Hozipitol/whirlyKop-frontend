import './App.css';
import Homebar from './components/Navbar/Navbar';
import { BrowserRouter,  Switch,Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Team from './components/Team/Team';
import Login from './components/Login/Login';
import Register from './components/Register/Register'
function App() {
  return (
    <div className="App">
      <Homebar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/home" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/team" component={Team}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
