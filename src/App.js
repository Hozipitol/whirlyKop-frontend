import './App.css';
import Homebar from './components/Navbar/Navbar';
import { BrowserRouter,  Switch, Route } from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Team from './components/Team/Team';
import Login from './components/Login/Login';
import Register from './components/Register/Register'
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
function App() {
  return (
    <div className="App">
      <Homebar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/whirlyKop-frontend" component={Home}/>
          <Route path="/home" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/team" component={Team}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register} />
          <Route path="/forgotPassword" component={ForgotPassword} />
        </Switch>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
