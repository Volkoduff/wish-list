import {useContext, useRef} from "react";
import classes from "./NewWishForm.module.scss"
import Card from "../ui/Card/Card";
import { WishesContext } from "../../store/wishes-context";

const NewWishForm: React.FC = () => {
    const titleInputRef = useRef<HTMLInputElement>(null);
    const categoryInputRef = useRef<HTMLInputElement>(null);
    const descriptionInputRef = useRef<HTMLTextAreaElement>(null);

    const wishCtx = useContext(WishesContext);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = titleInputRef.current!.value;
        const categoryText = categoryInputRef.current!.value;
        const descriptionText = descriptionInputRef.current!.value;
        if (enteredText.trim().length === 0) {
            // throw an error
            return;
        }
        // TODO переделать на передачу обьекта а не кучи строковых параметров
        wishCtx.addWish(enteredText, categoryText, descriptionText);
    };

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='title'>Meetup Title</label>
                    <input type='text' required id='title' ref={titleInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='category'>Category</label>
                    <input type='text' id='category' ref={categoryInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='description'>Description</label>
                    <textarea id='description' required ref={descriptionInputRef}/>
                </div>
                <div className={classes.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    );
};

export default NewWishForm;
