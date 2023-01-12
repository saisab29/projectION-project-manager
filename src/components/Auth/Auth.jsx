import React from 'react'
import styles from './Auth.module.css'

function Auth(props) {
    const isSignup = props.signup ? true : false;
    return (
        <div className={styles.container}>
            <form className={styles.from}>
                <p className={styles.heading}>{isSignup ? "Signup" : "Login"}</p>
            </form>
        </div>
    );
}

export default Auth