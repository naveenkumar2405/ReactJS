import React from 'react';
import {BrowserRouter as Router, Route, Link}  from "react-router-dom";
// import Todo from './Todo';
import Jokers from './Parent';
import Parent from './Parent';


const Index = () => {
  return<h2>Welcome React!</h2>;
};

const About = () => {
  return <h2>About us..!</h2>;
};

const Contact = () => {
  return <h2>Contact us</h2>;
};

const Todo = () => {
  return <Parent />;
};


const App =()=>{
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/contact/">Contact</Link>
            </li>
            <li>
              <Link to="/todo/">Upload</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/contact/" component={Contact} />
        <Route path="/todo/" component={Todo} />
      </div>
    </Router> // to define the router to link the react
  )
}

export default App;

