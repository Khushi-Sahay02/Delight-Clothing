import React from 'react';
import InputForm from '../input-form/input-form';
import ButtonComponent from '../button/buttonComponent';
import './signin.scss';
import { auth,signInwithGoogle } from '../../firebase/firebase-utils';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
    }
    handleSubmit=async event=> {
        event.preventDefault();
        const{email,password}=this.state;
        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email:'',password:''});
        }
        catch(error){
            console.log(error.message);
        }
    }
    handleChange=event=>{
        const {value,name}=event.target;
        this.setState({[name]:value});
    };
    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account </h2>
                <span>Please enter your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <InputForm
                    type='email' 
                    name='email' 
                    value={this.state.email}
                    handleChange={this.handleChange} label="Email" required/>
                    <InputForm
                    type='password' 
                    name='password' 
                    value={this.state.password}
                    handleChange={this.handleChange} label="Password" required/>
                    <div className='buttons'>
                        <ButtonComponent type='submit'>Sign In </ButtonComponent>
                        <ButtonComponent isGoogleSignIn onClick={signInwithGoogle}>Sign In With Google </ButtonComponent>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;