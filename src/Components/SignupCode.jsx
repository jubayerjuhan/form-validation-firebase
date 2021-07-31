import React, { useState } from 'react';
import SignupPage from "./SignupPage";
import firebase from "firebase/app";
import { firebaseConfig } from '../FirebaseConfig.js';
import "firebase/auth";

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}


const SignupCode = () => {
    const [theUser, setTheUser] = useState({})
    const [invEmail, setInvEmail] = useState({})
    const [invPass, setInvPass] = useState({})

    const getFieldValue = (e) => {

        let isFormValid = true;
        if (e.target.name === "email") {
            const isEmailValid = /\S+@\S+\.\S+/.test(e.target.value)
            setInvEmail(isEmailValid);
            isFormValid = isEmailValid;
        }

        if (e.target.name === "password") {
            const ispasswordValid = (/[0-9]/g.test(e.target.value) && e.target.value.length > 5)
            setInvPass(ispasswordValid);
            isFormValid = ispasswordValid;
        }

        if (isFormValid) {
            const copiedUser = { ...theUser }
            copiedUser[e.target.name] = e.target.value;
            setTheUser(copiedUser);
        }

    }
    console.log(theUser)
    const email = "davidjuhan3323@gmail.com"
    const password = "jadhahdj23"

    const handleEmailSignUp = (e) => {
        firebase.auth().createUserWithEmailAndPassword(theUser.email, password)
            .then((userCredential) => {
                // Signed in 
                var user = userCredential.user;
                console.log(user)
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                // ..
                console.log(errorMessage, errorCode)
            });
        e.preventDefault();
    }
    return (

        <div>
            <SignupPage
                handleEmailSignUp={handleEmailSignUp}
                getFieldValue={getFieldValue}
                invEmail={!invEmail}
                invPass={!invPass}
            ></SignupPage>
        </div>
    );
};

export default SignupCode;