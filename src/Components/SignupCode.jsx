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

    const getFieldValue = (e) => {

        if(e.target.name === "email"){
            const isEmailValid = 
        }
        const copiedUser = {...theUser}
        copiedUser[e.target.name] = e.target.value;
        setTheUser(copiedUser);
    }
    console.log(theUser)
    const email = "davidjuhan3323@gmail.com"
    const password = "jadhahdj23"

    const handleEmailSignUp = (e) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
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
            getFieldValue= {getFieldValue}
            ></SignupPage>
        </div>
    );
};

export default SignupCode;