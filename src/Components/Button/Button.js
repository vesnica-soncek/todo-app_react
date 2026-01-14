import React from 'react';
import styles from "./_button.module.scss";

const Button = ({title, type = "primary", size = "medium", action}) => {

    const doAction = () => {
        if(typeof action === "function") action();
    }
    let typeClass = "primary";
    let sizeClass = "medium";
    switch(type) {
        case "primary": typeClass = styles.primary; break;
        case "secondary": typeClass = styles.secondary; break;
        case "secondary-alt": typeClass = styles.secondaryAlt; break;
        case "adjacent": typeClass = styles.adjacent; break;
    }
    switch(size) {
        case "small": sizeClass = styles.small; break;
        case "medium": sizeClass = styles.medium; break;
        case "large": sizeClass = styles.large; break;
    }
    const classList = styles.btn + " " + typeClass + " " + sizeClass;
    return (
        <button className={classList} onClick={() => doAction()} >
            {title}
        </button>
    )
}
export default Button;