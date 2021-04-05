import React,{useState} from 'react';

const useForm = (validate) => {
    const[state,setState] = useState({
        username:'',
        email:'',
        password:'',
        password2:''
    })
const[submit,setSubmit] =  useState(''); 
const[error,setError] = useState({});
    const onChangeHandler = (e) =>{
        setState({...state,[e.target.name]:e.target.value})
    }

    const SubmitHandler = (e) =>{
        e.preventDefault();
        setSubmit(state);
        setError(validate(state))
    }
    return {state,onChangeHandler,submit,SubmitHandler,error}
        
}

export default useForm
