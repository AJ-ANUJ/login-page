import React from 'react';
import { useState } from 'react';

const LoginForm = () => {

    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState({
        emailAddress:'Email Address',
        password:'Password'
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
    <form>
        <label>
            <input
             type='email'
             name='emailAddress'
             value={formData.emailAddress}
             onChange={handleChange}
            /> 
        </label>
        <br/>
        <label>
            <input
            type='text'
            name='password'
            value={formData.password}
            onChange={handleChange}
            />
        </label>
        <br/>
        <label>
            <span onClick={handleForgetPassword}>Forgot Password?</span> <br/>
            Don't have an account? <span onClick={handleSignup}>Sign up!</span>
        </label>
        <br/>
        <button type='submit'>LOGIN</button>
    </form>
  )
}

export default LoginForm