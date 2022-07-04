import logo from './logo.svg';
import './App.css';

import React,{useState} from 'react';
import Login from './components/login';
import SingUp from './components/signup';
import Home from './components/home';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';

function App() {

  const [priorityType, setPriorityType] = useState([]);
  const addPriority = ((name, priorityType)=>{

    setPriorityType((item)=> [...item, {
      uid:priorityType.length,
      name:name,
      priorityType:priorityType


    }])




  })
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route  path="/sign-up" component={SingUp}></Route>
        </Switch>
        <Home list={priorityType} add={addPriority} />
      </Router>

    </div>
  );
}

export default App;
