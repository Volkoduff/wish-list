import classes from "./Button.module.scss"

const IconButton: React.FC<{}> = (props) => {
    return (
        <button className={classes.iconButton}>{props.children}</button>
    )
};

export default IconButton;
