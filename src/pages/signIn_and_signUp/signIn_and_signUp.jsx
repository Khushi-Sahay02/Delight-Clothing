import React from 'react';
import SignIn from '../../components/SignIn/signin';
import SignUp from '../../components/SignUp/signup';
import './signIn_and_signUp.scss';


function SignInSignUp(){
    return(
        <div className='signin_signup'>
            <SignIn />
            <SignUp />
        </div>
    );
}

export default SignInSignUp;