import React from 'react';
import { Link } from 'react-router-dom';
import useForm from './useForm';
import validate from './ValidateInfo';

const SignIn = () => {
    const{state,onChangeHandler,submit,SubmitHandler,error} = useForm(validate);
    return (
        <div className = 'container'>
        <form id="form" className="form" onSubmit={SubmitHandler}>
        <Link to='/Forms'>create an account</Link>
        <h1> Log in</h1>
            <div className='form_input'>
                <input
                    type='text'
                    name='username'
                    placeholder = 'enter your username'
                    onChange={onChangeHandler}
                  
                />
                  {<p>{error.username}</p>}
                 <input
                    type='password'
                    name='password'
                    placeholder = 'enter your password'
                    onChange={onChangeHandler}
                   
                />
                  {<p>{error.email}</p>}
                
            </div>
            <small>Forgot password</small><br/>
            <small>Not a Member yet</small>
            <button>SIGN IN</button>
            </form>
            </div>
    )
}

export default SignIn
