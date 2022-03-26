import classes from "./Button.module.scss"

const IconButton: React.FC<{isDisabled: boolean, onClickHandler: any}> = (props) => {
    return (
        <button 
            onClick={props.onClickHandler} 
            className={classes.iconButton} 
            disabled={props.isDisabled}>{props.children}
        </button>
    )
};

export default IconButton;
