import React from 'react'
import { ArrowRight } from "react-feather";
import styles from "./Home.module.css"
import designIcon from './designer.svg';

function Home() {
    return (

        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.left}>
                    <p className={styles.heading}>
                        Project ION
                    </p>
                    <p className={styles.subHeading}>
                        Organize and showcase all of your project to the world
                    </p>
                    <button>Get Started <ArrowRight />{" "}</button>

                </div>
                <div className={styles.right}>
                    <img src={designIcon} alt="Projects" />
                </div>
            </div>

        </div >

    )
}

export default Home