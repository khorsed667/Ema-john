import React, { useContext } from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
import { AuthContex } from '../Providers/AuthProvider';

const Login = () => {

    const { logUser, user } = useContext(AuthContex)

    const handelLogin = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password);

        // event.preventDefault();
        // const email = event.target.email.value;
        // const password = event.target.email.value
        // console.log(password);

        logUser(email, password)
        .then(result =>{
            const loggedUser = result.user
            console.log(loggedUser);
            form.reset()
        })
        .catch(error =>{
            console.log(error);
        })

    }


    return (
        <div className="form-container">
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handelLogin}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" required />
                </div>
                <button className='login-btn' type='submit'>Login</button>
                <p className='login-text'>New to Ema John? <Link className='login-link' to='/singup'>Creat an account</Link></p>
            </form>
        </div>
    );
};

export default Login;