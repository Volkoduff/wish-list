import classes from "./Button.module.scss"
import handler from "../../pages/api/hello";

const IconButton: React.FC = (props) => {
    return (
        <button className={classes.iconButton}>{props.children}</button>
    )
};

export default IconButton;
