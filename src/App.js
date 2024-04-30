import React from 'react';
import Navbar from './components/Navbar';
import { Link } from 'react-router-dom';

function App() {
  return(
  <div style={{ textAlign: 'center' }} className="background-container">
    <Navbar/>
    <h1 className='text-white'><b>WELCOME TO PHARMA CARE</b></h1>
    <br/>
    <br/>
    <br/>

    <h5> Medicines at your fingertips..</h5>
    <Link to={"/Register"} className="btn btn-primary">Create Account</Link>

    <br/>
    <p>Already have an Account <Link to={"/login"}>Login</Link></p>
  </div>
);
}
export default App;