import React from 'react';
import './sign-in-and-sign-up.styles.scss';
import SignIn from '../sign-in/sign-in.component.jsx';
import SignUp from '../sign-up/sign-up.component';

const SignInAndSignUp = () => (
    <div className="sign-in-and-sign-up">
        <SignIn/>   
        <SignUp/>
    </div>

);

export default SignInAndSignUp;