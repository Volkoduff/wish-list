import * as React from "react";
import Wish from "../../models/wish";
import classes from "./WishCard.module.scss"
import IconButton from "../ui/Button/IconButton";
import { useRouter } from "next/router";
import { MdDelete } from "react-icons/md";
import { useContext, useState, useEffect } from "react";
import moment from "moment";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { useActions } from "../../hooks/useActions";

const WishCard: React.FC<{ wish: Wish }> = (props) => {
    // const [isDeleting, setIsdeleting] = useState<Boolean>(false)
    const { loading, error } = useTypedSelector((state) => state.wish);
    const { removeWish } = useActions();
    // const cardClasses = `${isDeleting && classes.wishCard__fadeOut} ${classes.wishCard}`

    // const getDetailedInfoHandler = (event: React.MouseEvent) => {
    //     router.push('/wish-list/' + props.wish.id);
    // };

    const deleteWishHandler = async (id: string) => {
        removeWish(id);
    }

    return (
        <div className={classes.wishCard}>
            <IconButton onClickHandler={deleteWishHandler.bind(null, props?.wish.id as string)} isDisabled={false}            //  isDisabled={wishesCtx.isLoadingState}
             ><MdDelete /></IconButton>
            <div className={classes.wishCard__baseInfo}>
                <h3 className={classes.wishCard__title}>{props.wish.title}</h3>
            </div>
            <div className={classes.wishCard__optionalInfo}>
                <span className={classes.wishCard__tag}>#{props.wish.category}</span>
                <p className={classes.wishCard__date}>Добавлено {moment(props.wish.date).format('DD.MM.YY в HH:mm')}</p>
            </div>
            {/* <p className={classes.details__button} onClick={getDetailedInfoHandler}>Edit</p> */}
        </div>
    )
};

export default WishCard;
