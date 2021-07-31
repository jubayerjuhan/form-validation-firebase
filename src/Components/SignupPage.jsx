import React from 'react';
import './SignupPage.css'

const SignupPage = ({handleEmailSignUp, getFieldValue}) => {
    return (
        <div className="mainContainer">
            <form action="">
                <input className="input" type="email" name="email" onBlur={getFieldValue} id="email" placeholder="Enter Email"/> <br />
                <input className="input" type="password" name="password" onBlur={getFieldValue} id="password" placeholder="Enter Password"/> <br />
                <input className="button" type="submit" value="Sign Up Now" onClick={handleEmailSignUp} /> <br />
            </form>
        </div>
    );
};

export default SignupPage;