import React from 'react';
import styles from "./_heading.scss";

const Heading = ({title}) => {
    return (
        <header className={styles.heading} >
            <h1>{title}</h1>
        </header>
    )
}
export default Heading;