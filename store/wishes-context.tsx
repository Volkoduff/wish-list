import * as React from "react";
import {useState} from "react";
import Wish from "../models/wish";

interface SendWishData {
    title: string;
    category: string;
    description: string;
    date: Date;
}

type WishContextObj = {
    items: Wish[],
    updateItems: (items: Wish[]) => void,
    addWish: (data: SendWishData) => Promise<void>,
    removeWish: (id: string) => Promise<void>,
}

export const WishesContext = React.createContext<WishContextObj>({
    items: [],
    updateItems: () => {},
    addWish: async () => {},
    removeWish: async (id: string) => {},
});

const WishesContextProvider: React.FC = (props) => {
    const [wishes, setWishes] = useState<Wish[]>([]);

    const saveWish = async (data: SendWishData) => {
        const response = await fetch('api/new-wish', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json'
            }

            
        })
        
        if(response.ok) {
            const res = await response.json()
            console.log(res);
        }
    }
    
    const removeWishHandler = async (id: string) => {
        setWishes((prev) => prev.filter((wish) => wish.id !== id));
        const res = await fetch('api/delete-wish', {
            method: "DELETE",
            body: id,
        })

        if (res.ok) {
            const result = await res.json();
            console.log(result)
        }
    };

    const updateItemsHandler = (items: Wish[]) => {
        setWishes(items)
    };

    const contextValue: WishContextObj = {
        items: wishes,
        addWish: saveWish,
        updateItems: updateItemsHandler,
        removeWish: removeWishHandler,
    };

    return <WishesContext.Provider value={contextValue}>{props.children}</WishesContext.Provider>
};

export default WishesContextProvider;
