import {useContext, useRef} from "react";
import classes from "./NewWishForm.module.scss"
import { BiLoaderAlt } from "react-icons/bi";
import { BsArrowLeft } from "react-icons/bs"

const NewWishForm: React.FC = () => {
    const titleInputRef = useRef<HTMLInputElement>(null);
    const categoryInputRef = useRef<HTMLInputElement>(null);
    const descriptionInputRef = useRef<HTMLInputElement>(null);

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

        // wishesCtx.addWish(data);
    };

    const closeModalHandler = () => {
        // wishesCtx.setModalState(false);
    }

    return (
        <div className={classes.formWrap}>
            <button onClick={closeModalHandler} className={classes.closeButon} ><BsArrowLeft></BsArrowLeft></button>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <input type='text' required  autoComplete="false" id='title' autoFocus placeholder={'Wish name*'} ref={titleInputRef}/>
                </div>
                <div className={classes.control}>
                    <input type='text' required  autoComplete="false" id='category' placeholder={'HashTag*'} ref={categoryInputRef}/>
                </div>
                <div className={classes.control}>
                    <input id='description' autoComplete="false" placeholder={'Comment'} ref={descriptionInputRef}/>
                </div>
                <div className={classes.actions}>
                    <button 
                        className={classes.submitButton}
                        // disabled={wishesCtx.isLoadingState}
                        >
                            {/* {wishesCtx.isLoadingState ? <BiLoaderAlt className='loader__element loader__element_button'/> : 'Add wish'} */}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default NewWishForm;
