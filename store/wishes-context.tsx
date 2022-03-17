import * as React from "react";
import Wish from "../models/wish";
import {useState} from "react";

type WishContextObj = {
    items: Wish[],
    addWish: (wishTitle: string, tag: string, description: string) => void,
    removeWish: (id: string) => void
};

type WishObjProps = {
    wishTitle: string,
    tag: string,
    description: string
}

export const WishesContext = React.createContext<WishContextObj>({
    items: [],
    addWish: () => {},
    removeWish: (id: string) => {},
});

const WishesContextProvider: React.FC = (props) => {
    const [wishes, setWishes] = useState<Wish[]>([]);

    const addWishHandler = (wishTitle: string, tag: string, description: string) => {
        const wish = new Wish(wishTitle, tag, description);
        setWishes((prev) => prev.concat(wish))
    };

    const removeWishHandler = (id: string) => {
        setWishes((prev) => prev.filter((wish) => wish.id !== id))
    };

    const contextValue: WishContextObj = {
        items: wishes,
        addWish: addWishHandler,
        removeWish: removeWishHandler,
    };

    return <WishesContext.Provider value={contextValue}>{props.children}</WishesContext.Provider>
};

export default WishesContextProvider;
