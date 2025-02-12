import './App.css';
import TeacherHomepage from "./components/homepage/Teacherhomepage"
import Login from "./components/login/login"
import Register from "./components/register/register"
import StudentHomepage from "./components/homepage/Studenthomepage"
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import { useState } from 'react';

function App() {

  const [ user, setLoginUser] = useState({})

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {
              user && user._id ? <TeacherHomepage setLoginUser={user} /> : <Login setLoginUser={setLoginUser}/>
            }
          </Route>
          <Route exact path="/teacherPortal">
            {
              user && user._id ? <TeacherHomepage setLoginUser={user} /> : <Login setLoginUser={setLoginUser}/>
            }
          </Route>
          <Route path="/login">
            <Login setLoginUser={setLoginUser}/>s
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/studentPortal">
          {
              user && user._id ? <StudentHomepage setLoginUser={user} /> : <Login setLoginUser={setLoginUser}/>
          }
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
