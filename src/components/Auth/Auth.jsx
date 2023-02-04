import React from 'react'
import InputControl from '../InputControl/InputControl';
import styles from './Auth.module.css'
import './Blobz.css';

function Auth(props) {
    const isSignup = props.signup ? true : false;
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
                </div>
                <div class="tk-blob1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 747.2 726.7">
                        <path d="M539.8 137.6c98.3 69 183.5 124 203 198.4 19.3 74.4-27.1 168.2-93.8 245-66.8 76.8-153.8 136.6-254.2 144.9-100.6 8.2-214.7-35.1-292.7-122.5S-18.1 384.1 7.4 259.8C33 135.6 126.3 19 228.5 2.2c102.1-16.8 213.2 66.3 311.3 135.4z"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 747.2 726.7">
                        <path d="M539.8 137.6c98.3 69 183.5 124 203 198.4 19.3 74.4-27.1 168.2-93.8 245-66.8 76.8-153.8 136.6-254.2 144.9-100.6 8.2-214.7-35.1-292.7-122.5S-18.1 384.1 7.4 259.8C33 135.6 126.3 19 228.5 2.2c102.1-16.8 213.2 66.3 311.3 135.4z"></path>
                    </svg>
                </div>
                <div class="tk-blob2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 428.4 394.6">
                        <path d="M369.4 109.2c43.2 55.3 71.5 121.4 53.4 167.3-18.2 45.8-82.8 71.4-140.5 91.7-57.8 20.4-108.7 35.4-152.9 20.3C85.1 373.4 47.6 328.3 23.2 267c-24.5-61.2-35.8-138.6-2.5-191.7C54.1 22.2 132-6.6 200 1.3c68 7.9 126.1 52.5 169.4 107.9z"></path>
                    </svg>
                </div>
                <form className={styles.form}>
                    <p className={styles.smallLink}>{"< Back to Home"}</p>
                    <p className={styles.heading}>{isSignup ? "Signup" : "Login"}</p>

                    {
                        isSignup && (

                            <InputControl label="Name" placeholder="Enter your name" />)
                    }
                    <InputControl label="Email" placeholder="Enter your email" />
                    <InputControl label={"Password"} isPassword placeholder="Enter your password" />

                    <button>{isSignup ? "Signup" : "Login"}</button>

                </form>
            </div>
        </div>

    );
}

export default Auth