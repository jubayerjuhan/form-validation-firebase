import React from 'react';
import './SignupPage.css'

const SignupPage = ({handleEmailSignUp, getFieldValue, invEmail, invPass}) => {
    console.log(invEmail)
    console.log(invPass)
    return (
        <div className="mainContainer">
            <form action="">
                <input className={invEmail === true?'invalid-input':'input'} type="email" name="email" onBlur={getFieldValue} id="email" placeholder="Enter Email"/> <br />
                
                {invEmail === true?
                    <p className="error-message">Invalid Email</p>
                :''}

                <input className={invPass === true?'invalid-input':'input'} type="password" name="password" onBlur={getFieldValue} id="password" placeholder="Enter Password"/> <br />
                
                {invPass === true?
                    <p className="error-message">Password Must Be 5 Char Long With One Number</p>
                :''}

                <input className="button" type="submit" value="Sign Up Now" onClick={handleEmailSignUp} /> <br />
            </form>
        </div>
    );
};

export default SignupPage;