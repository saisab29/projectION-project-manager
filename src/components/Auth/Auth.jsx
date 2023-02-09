import React from 'react'
import InputControl from '../InputControl/InputControl';
import styles from './Auth.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../firebase";
import './Blobz.css';

function Auth(props) {
    const isSignup = props.signup ? true : false;
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [errorMsg, setErrorMsg] = useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

    const handleLogin = () => {

    }
    const handleSignup = () => {
        if (!values.name || !values.email || !values.password) {
            setErrorMsg("Fill out all the credentials!")
            return;
        }

        setSubmitButtonDisabled(true);
        createUserWithEmailAndPassword(auth, values.email, values.password).then((response) => {
            setSubmitButtonDisabled(false);
            const userId = response.user.uid;
            console.log(response)
        })

            .catch((err) => {
                setSubmitButtonDisabled(false);
                setErrorMsg(err.message);
            });

    };
    const handleSubmission = (event) => {
        event.preventDefault();

        if (isSignup) handleSignup();
        else handleLogin();
    }
    return (
        <div className={styles.container}>
            <div className={styles.background}>
                <div class="tk-blob">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 747.2 726.7">
                        <path d="M539.8 137.6c98.3 69 183.5 124 203 198.4 19.3 74.4-27.1 168.2-93.8 245-66.8 76.8-153.8 136.6-254.2 144.9-100.6 8.2-214.7-35.1-292.7-122.5S-18.1 384.1 7.4 259.8C33 135.6 126.3 19 228.5 2.2c102.1-16.8 213.2 66.3 311.3 135.4z"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 747.2 726.7">
                        <path d="M539.8 137.6c98.3 69 183.5 124 203 198.4 19.3 74.4-27.1 168.2-93.8 245-66.8 76.8-153.8 136.6-254.2 144.9-100.6 8.2-214.7-35.1-292.7-122.5S-18.1 384.1 7.4 259.8C33 135.6 126.3 19 228.5 2.2c102.1-16.8 213.2 66.3 311.3 135.4z"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 747.2 726.7">
                        <path d="M539.8 137.6c98.3 69 183.5 124 203 198.4 19.3 74.4-27.1 168.2-93.8 245-66.8 76.8-153.8 136.6-254.2 144.9-100.6 8.2-214.7-35.1-292.7-122.5S-18.1 384.1 7.4 259.8C33 135.6 126.3 19 228.5 2.2c102.1-16.8 213.2 66.3 311.3 135.4y"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 747.2 726.7">
                        <path d="M539.8 137.6c98.3 69 183.5 124 203 198.4 19.3 74.4-27.1 168.2-93.8 245-66.8 76.8-153.8 136.6-254.2 144.9-100.6 8.2-214.7-35.1-292.7-122.5S-18.1 384.1 7.4 259.8C33 135.6 126.3 19 228.5 2.2c102.1-16.8 213.2 66.3 311.3 135.4y"></path>
                    </svg>
                </div>
                <form className={styles.form} onSubmit={handleSubmission}>

                    <p className={styles.smallLink}><Link to="/">{"< Back to Home"}</Link></p>
                    <p className={styles.heading}>{isSignup ? "Signup" : "Login"}</p>

                    {
                        isSignup && (

                            <InputControl label="Name" placeholder="Enter your name" onChange={(event) =>
                                setValues((prev) => ({ ...prev, name: event.target.value }))} />)
                    }
                    <InputControl label="Email" placeholder="Enter your email" onChange={(event) =>
                        setValues((prev) => ({ ...prev, email: event.target.value }))} />
                    <InputControl label={"Password"} isPassword placeholder="Enter your password" onChange={(event) =>
                        setValues((prev) => ({ ...prev, password: event.target.value }))} />

                    <p className={styles.error}>{errorMsg}</p>

                    <button type="submit" disabled={submitButtonDisabled}>{isSignup ? "Signup" : "Login"}</button>

                    <div className={styles.bottom}>
                        {isSignup ?
                            (<p>Already have an account ?<Link to="/login">Login here</Link></p>) :
                            (<p>New User ?<Link to="/signup">Create an account</Link></p>)
                        }
                    </div>

                </form>
            </div>
        </div>

    );
}

export default Auth