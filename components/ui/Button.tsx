import * as React from "react";
import classes from "./Button.module.scss"

const Button: React.FC<{onClickHandler: () => void | null}> = (props) => {
    return (
        <button
            onClick={props.onClickHandler}
            className={classes.primaryButton}>
            {props.children}
        </button>
    )
};

export default Button;
