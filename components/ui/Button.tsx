import * as React from "react";
import classes from "./Button.module.scss"

const Button: React.FC = (props) => {
    return (
        <button className={classes.primaryButton}>{props.children}</button>
    )
};

export default Button;
