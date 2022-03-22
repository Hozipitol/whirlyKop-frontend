import './App.css';
import Homebar from './components/Navbar/Navbar';
import { BrowserRouter,  Switch, Route } from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Team from './components/Team/Team';
import Login from './components/Login/Login';
import Register from './components/Register/Register'
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import Dashboard from './components/Dashboard/Dashboard'
import Classroom from './components/Classroom/Classroom'
import Topic from './components/Topic/Topic';
import Report from './components/Reports/Report';
function App() {
  return (
    <div className="App">
      <Homebar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/whirlyKop-frontend" component={Home}/>
          <Route exact path="/" component={Home}/>
          <Route path="/home" component={Home}/>
          <Route path='/dashboard' component={Topic} />
          <Route path="/about" component={About}/>
          <Route path="/team" component={Team}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register} />
          <Route path="/forgotPassword" component={ForgotPassword} />
          <Route path="/topic" exact component={Topic} />
          <Route path="/classroom" exact component={Classroom} />
          <Route path="/reports" exact component={Report} />
      
        </Switch>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
