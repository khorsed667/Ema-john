import React, { useContext } from 'react';
import './SingUp.css'
import { Link } from 'react-router-dom';
import { AuthContex } from '../Providers/AuthProvider';

const SingUp = () => {

    const {creatUser} = useContext(AuthContex)

    const handelClick = event =>{
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        const confirm = form.confirm.value

        console.log(email, password, confirm);

        creatUser(email, password)
        .then(result =>{
            const signedUser = result.user
            console.log(signedUser);
        })
        .catch(error =>{
            console.log(error);
        })
    }

    return (
        <div className="form-container">
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handelClick}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" required />
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm"  required />
                </div>
                <button className='login-btn' type='submit'>Sign Up</button>
                <p className='login-text'>Already have  an account? <Link className='login-link' to='/login'>Please Login</Link></p>
            </form>
        </div>
    );
};

export default SingUp;