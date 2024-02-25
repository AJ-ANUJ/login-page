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

    // function to toggle showPassword state between true and false
    const togglePasswordDisplay = () => {
        setShowPassword(!showPassword);
    };

    // function to provide visual feedback on form submission
    const handleSubmission = (event) => {
        event.preventDefault();
        if (formData.emailAddress == '' || formData.password== '') {
            alert('email address / password incorrect')
        }
        else {
            alert('Login successful!');
        }
    };

  return (
    <form className='login-form' onSubmit={handleSubmission}>
        <span className='form-heading'>hurd</span> <br/>
        <label className='email-label'>
            <input
             className='email-input'
             type='text'
             name='emailAddress'
             placeholder='Email Address'
             value={formData.emailAddress}
             onChange={handleChange}
            /> 
        </label>

        { /* ------label inside div */ }
        <div className='pswd-cntr'>
            <label className='password-label'>
                <input
                className='password-input'
                type={showPassword?'text':'password'}
                name='password'
                placeholder='Password'
                value={formData.password}
                onChange={handleChange}
                />
            </label>
            <span className='toggle-pswd' onClick={togglePasswordDisplay}>
                <img src={showPassword?'/visibility.png':'visibility_off.png'}
                className='vis-img' />
            </span>
        </div>
        <label>
            <span className='pswd-span' onClick={handleForgetPassword}>Forgot Password?</span> <br/>
            <span className='signup-span' onClick={handleSignup}>Don't have an account? Sign up!</span>
        </label>
        <br/>
        <button className='submit-btn' type='submit'>LOGIN</button>
    </form>
  )
}

export default LoginForm