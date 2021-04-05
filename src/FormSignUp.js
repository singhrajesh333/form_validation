import React from 'react'
import useForm from './useForm';
import validate from './ValidateInfo';
import './FormSignUp.css';
import { Link } from 'react-router-dom';

const FormSignup = () => {
    const{state,onChangeHandler,submit,SubmitHandler,error} = useForm(validate);
    return (
        <div className = 'container'>
           <form id="form" className="form" onSubmit={SubmitHandler}>
           <h1>Sign up</h1>
               <div className='form_input'>
                   <label>Username</label>
                   <input
                       type='text'
                       name='username'
                       placeholder = 'enter your name'
                       onChange={onChangeHandler}
                   />
                   {<p>{error.username}</p>}
               </div>
               <div className='form_input'>
                   <label>Email</label>
                   <input
                       type='text'
                       name='email'
                       placeholder = 'enter your email'
                       onChange={onChangeHandler}
                   />
                  {<p>{error.email}</p>}
               </div>
               <div className='form_input'>
                   <label>Password</label>
                   <input
                       type='password'
                       name='password'
                       placeholder = 'enter your password'
                       onChange={onChangeHandler}
                   />
                  {<p>{error.password}</p>}
               </div>
               <div className='form_input'>
                   <label>Confirm password</label>
                   <input
                       type='password'
                       name='password2'
                       placeholder = 'enter your confirm password'
                       onChange={onChangeHandler}
                   />
                   {<p>{error.password2}</p>}
               </div>
               
               <button type='submit'>submit</button>
            
               
               
               
           </form>
           <h1>{submit.username}</h1>
            <h1>{submit.email}</h1>
                <h1>{submit.password}</h1>
                    <h1>{submit.password2}</h1>
        </div>
    )
}

export default FormSignup
