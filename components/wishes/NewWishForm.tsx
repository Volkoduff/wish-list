import {useContext, useRef} from "react";
import classes from "./NewWishForm.module.scss"
import Card from "../ui/Card/Card";
import Button from "../ui/Button/Button";
import { WishesContext } from "../../store/wishes-context";

interface FormWishData {
    title: string;
    category: string;
    description: string; 
}

const NewWishForm: React.FC<{fetchWishes: () => void}> = (props) => {
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

        await wishesCtx.addWish(data);
        props.fetchWishes();
    };

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <input type='text' required id='title' placeholder={'Wish name'} ref={titleInputRef}/>
                </div>
                <div className={classes.control}>
                    <input type='text' id='category' placeholder={'HashTag'} ref={categoryInputRef}/>
                </div>
                <div className={classes.control}>
                    <input id='description' placeholder={'Comment'} ref={descriptionInputRef}/>
                </div>
                <div className={classes.actions}>
                    <Button onClickHandler={() => {}}>Add wish</Button>
                </div>
            </form>
        </Card>
    );
};

export default NewWishForm;
