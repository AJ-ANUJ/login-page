import React from 'react';
import { useState } from 'react';
import './LoginForm.css';

const LoginForm = () => {

    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState({
        emailAddress:'',
        password:''
    });

    // function to handle change in email and password field
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    // function to handle click on forget password
    const handleForgetPassword = () => {
        alert('Clicked forget password!')
    }

    // function to handle click on sign up
    const handleSignup = () => {
        alert('Clicked on Sign Up!')
    }

    const togglePasswordDispay = () => {
        setShowPassword(!showPassword);
    };

  return (
    <form className='login-form'>
        <span className='form-heading'>hurd</span> <br/><br/>
        <label>
            <input
             type='email'
             name='emailAddress'
             placeholder='Email Address'
             value={formData.emailAddress}
             onChange={handleChange}
            /> 
        </label>
        <br/><br/>
        <label>
            <input
            type='text'
            name='password'
            placeholder='Password'
            value={formData.password}
            onChange={handleChange}
            />
        </label>
        <br/><br/>
        <label>
            <span style={{color:'gray', fontSize:'10px'}} onClick={handleForgetPassword}>Forgot Password?</span> <br/>
            <span style={{color:'deepskyblue', fontSize:'10px'}} onClick={handleSignup}>Don't have an account? Sign up!</span>
        </label>
        <br/>
        <button type='submit'>LOGIN</button>
    </form>
  )
}

export default LoginForm