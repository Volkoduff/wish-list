import * as React from "react";
import {useState} from "react";
import Wish from "../models/wish";

type WishContextObj = {
    items: Wish[],
    updateItems: (items: Wish[]) => void,
    addWish: (wishTitle: string, tag: string, description: string) => void,
    removeWish: (id: string) => void,
}

export const WishesContext = React.createContext<WishContextObj>({
    items: [],
    updateItems: () => {},
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
        setWishes((prev) => prev.filter((wish) => wish.id !== id));
    };

    const updateItemsHandler = (items: Wish[]) => {
        setWishes(items)
    };

    const contextValue: WishContextObj = {
        items: wishes,
        updateItems: updateItemsHandler,
        addWish: addWishHandler,
        removeWish: removeWishHandler,
    };

    return <WishesContext.Provider value={contextValue}>{props.children}</WishesContext.Provider>
};

export default WishesContextProvider;


