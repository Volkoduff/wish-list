import * as React from "react";
import Wish from "../../models/wish";
import classes from "./WishCard.module.scss"
import IconButton from "../ui/Button/IconButton";
import { useRouter } from "next/router";
import { MdDelete } from "react-icons/md";
import moment from "moment";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";

const WishCard: React.FC<{ wish: Wish }> = (props) => {
    const { deleting, deletedId } = useTypedSelector((state) => state.wish);
    const { removeWish } = useActions();
    const router = useRouter();

    const getDetailedInfoHandler = (event: React.MouseEvent) => {
        router.push('/wish-list/' + props.wish.id);
    };

    let cardClasses = classes.wishCard;
    if (deletedId === props.wish.id) {
        cardClasses = `${classes.wishCard} ${classes.wishCard__fadeOut}`; 
    }

    const normalizeDate = (): string => {
        // С сервера приходит формат времени в виде строки формата ISO
        const date = props.wish.date;
        if(moment(date).isSame(moment(), 'day')) {
            return 'сегодня'
        }
        if(moment(date).isSame(moment().subtract(1, 'day'))) {
            return 'вчера'
        }
        return moment(date).format('DD.MM.YY в HH:mm')
    }

    return (
        <div className={cardClasses}>
            <IconButton onClickHandler={removeWish.bind(null, props?.wish.id as string)} isDisabled={deleting}>
                <MdDelete />
            </IconButton>
            <div className={classes.wishCard__baseInfo}>
                <h3 className={classes.wishCard__title}>{props.wish.title}</h3>
            </div>
            <div className={classes.wishCard__optionalInfo}>
                <span className={classes.wishCard__tag}>#{props.wish.category}</span>
                <p className={classes.wishCard__date}>Добавлено {normalizeDate()}</p>
            </div>
            <p className={classes.details__button} onClick={getDetailedInfoHandler}>Edit</p>
        </div>
    )
};

export default WishCard;
