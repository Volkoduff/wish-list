import classes from "./Modal.module.scss"

const Modal: React.FC<{ closeModal: () => void }> = (props) => {
    const closeModal = (event: React.MouseEvent) => {
        props.closeModal();
    };

    return (
        <div className={classes.backdrop}>
            <div className={classes.modal}>
                <button className={classes.closeButton} onClick={closeModal}>x</button>
                {props.children}
            </div>
        </div>
    )
};

export default Modal;
