import * as React from 'react';
import Input from '../../Component/Layout/Input';
import './login.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';


export default function Login() {
    return (
      <div className="form-container">
        <form>
          <h1>SIGN UP</h1>
  
          <Input placeholder="Full Name" type="text" /> <br />
          <Input placeholder="E-Mail" type="text" />
          <Input placeholder="Contact Number" type="text" /> <br />
          <Input placeholder="Password" type="password" /> <br />
          <Input placeholder="Confirm Password" type="password" /> <br />
  
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">I agree to the terms and conditions</label> <br />
          <button type="submit">Create Account</button>
        </form>
  
        <div className="line-container">
          <hr className="line" />
          <p className="line-text">OR</p>
          <hr className="line" />
        </div>
        <p>Already Have an Account? <Link to="/content">Sign In</Link></p>
      </div>
    );
  }
