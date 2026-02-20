import React from "react";

import {useForm} from 'react-hook-form';

function LoginForm(){

        const {register, handleSubmit, formState: {errors}} = useForm();
        const onSubmit = (data) =>{
            console.log(data);
        }

return(
<>
<h1>useForm Demo</h1>

<form style={{marginTop:'100px', marginLeft:'100px'}}
onSubmit={handleSubmit(onSubmit)}>
    <label>Enter EMail-ID</label>
    <input type="email"
    style={{marginLeft:'10px'}}
    {...register('email', {required: true, pattern: /^\S+@\S+$/i})}
    />
    {errors.email && <p>Email must be a valid email</p>}
    <br></br>
    <label>Enter Password</label>
    <input type="password"
    style={{marginLeft:'10px'}} />
    <br></br>
    <button type="submit" style={{marginLeft:'200px'}}>Submit</button>
</form>

</>
)
}

export default LoginForm;