import React from 'react';
import './Hello.css';


function Hello({Fname}) {
  return <p className="myclass"> this is from p Tag name: <strong>{Fname}</strong> </p>
}

export default Hello;