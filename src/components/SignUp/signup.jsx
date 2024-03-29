import React from 'react';
import './signup.scss';
import InputForm from '../input-form/input-form';
import ButtonComponent from '../button/buttonComponent';
import {auth,createUserProfile} from '../../firebase/firebase-utils';

class signup extends React.Component{
    constructor(){
        super();
        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }
    handleSubmit= async event=>{
        event.preventDefault();
        const {displayName,email,password,confirmPassword}=this.state;
        if(password !== confirmPassword){
            alert("Passwords don't match");
            return;
        }
        try{
            const {user}= await auth.createUserWithEmailAndPassword(email,password);
            await createUserProfile(user,{displayName});
            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
            });
        }
        catch(error){
            console.log(error.message);
        }
    }
    handleChange=event=>{
        const {name,value}=event.target;
        this.setState({[name]:value});
    }

    render(){
        const {displayName,email,password,confirmPassword}=this.state;
        return(
           <div className='sign-up'>
            <h2 className='title'>I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form'>
                <InputForm 
                type='text' 
                name='displayName' 
                value={displayName}
                onChange={this.handleChange} label="Full Name" required
                />
                <InputForm 
                type='email' 
                name='email' 
                value={email}
                onChange={this.handleChange} label="Email" required
                />
                <InputForm 
                type='password' 
                name='password' 
                value={password}
                onChange={this.handleChange} label="Password" required
                />

                <InputForm 
                type='password' 
                name='confirmPassword' 
                value={confirmPassword}
                onChange={this.handleChange} label="Confirm Password" required
                />
                <ButtonComponent type='submit' onClick={this.handleSubmit}>SIGN UP</ButtonComponent>
            </form>
           </div> 
        );
    }
}
export default signup;