import {useContext, useRef} from "react";
import classes from "./NewWishForm.module.scss"
import { WishesContext } from "../../store/wishes-context";

const NewWishForm: React.FC = () => {
    const titleInputRef = useRef<HTMLInputElement>(null);
    const categoryInputRef = useRef<HTMLInputElement>(null);
    const descriptionInputRef = useRef<HTMLInputElement>(null);

    const wishesCtx = useContext(WishesContext);

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = titleInputRef.current!.value;
        const categoryText = categoryInputRef.current!.value;
        const descriptionText = descriptionInputRef.current!.value;
        if (enteredText.trim().length === 0) {
            // throw an error
            return;
        }
        // TODO переделать на передачу обьекта а не кучи строковых параметров
        const data = {
            title: enteredText,
            category: categoryText,
            description: descriptionText,
            date: new Date(),
        }

        wishesCtx.addWish(data);
    };

    const closeModalHandler = () => {
        wishesCtx.setModalState(false);
    }

    return (
        <div className={classes.formWrap}>
            <button onClick={closeModalHandler} className={classes.closeButon} >Close</button>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <input type='text' required id='title' placeholder={'Wish name*'} ref={titleInputRef}/>
                </div>
                <div className={classes.control}>
                    <input type='text' required id='category' placeholder={'HashTag*'} ref={categoryInputRef}/>
                </div>
                <div className={classes.control}>
                    <input id='description' placeholder={'Comment'} ref={descriptionInputRef}/>
                </div>
                <div className={classes.actions}>
                    <button 
                        className={classes.submitButton}
                        disabled={wishesCtx.isLoadingState}>
                        Add wish
                    </button>
                </div>
            </form>
        </div>
    );
};

export default NewWishForm;
