import React from 'react'
import InputControl from '../InputControl/InputControl';
import styles from './Auth.module.css'

function Auth(props) {
    const isSignup = props.signup ? true : false;
    return (
        <div className={styles.container}>
            <form className={styles.from}>
                <p className={styles.heading}>{isSignup ? "Signup" : "Login"}</p>
                <InputControl />
                <InputControl label={"password"} isPassword />
            </form>
        </div>
    );
}

export default Auth