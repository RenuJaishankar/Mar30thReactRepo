import React from 'react';
import logo from './logo.svg';
import './App.css';
import Fruit from './Fruit';
import Emp from './Emp';
function App() {
  return (
    <div>
       {/* When we call our component, we can then define our props */}
    {/* We can do this with as many instances of our Fruit component as we need to! */}
    <Fruit name="orange" color="orange" type="citrus"/>
    <Fruit name="granny-smith" color="green" type="apple"/>
    <Emp id="1" name= "John" age="30" />
    <Emp id="2" name="Mary" age ="25" />
    <Emp id ="3" name= "Bill" age = "30" />
    </div>
   
  );
  
}

export default App;
