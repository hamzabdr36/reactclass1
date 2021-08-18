import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello';


function App(props) {
  return <div>Hello From App.js updated {props.name} Gender = {props.gender} age = {props.age-3} <br/> 
  <Hello Fname={props.name}></Hello>
  </div>
}

export default App;
