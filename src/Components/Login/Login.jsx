import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="form-container">
            <h2 className='form-title'>Login</h2>
            <form>
                <div className="form-control">
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" id="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" id="password" required />
                </div>
                <button className='login-btn' type='submit'>Login</button>
                <p className='login-text'>New to Ema John? <Link className='login-link' to='/singup'>Creat an account</Link></p>
            </form>
        </div>
    );
};

export default Login;