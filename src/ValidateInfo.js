import React from 'react'

const ValidateInfo = (state) => {
        let error  =  {};
        if(!state.username.trim()){
            error.username  = 'Username Required';
        }
        if(!state.email){
            error.email  = 'Email Required';
        }
        else if (!/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(state.email)){
            error.email = 'email id is invalid';
        }
        if(!state.password){
            error.password  = 'password is  Required';
        }
        else if(state.password.length<6){
            error.password  = 'password needes to be 6 character or more';
        }
        if(!state.password2){
            error.password2  = 'password is  Required';
        }
        else if(state.password2 !== state.password){
            error.password2  = 'password do not match';
        }
            
        return error;
       
    
}

export default ValidateInfo
