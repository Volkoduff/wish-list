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
    isLoadingState: boolean,
    isModalOpen: boolean,
    setModalState: (isOpen: boolean) => void,
    updateItems: (items: Wish[]) => void,
    addWish: (data: SendWishData) => Promise<void>,
    removeWish: (id: string) => Promise<void>,
    fetchWishes: () => Promise<void>,

}

export const WishesContext = React.createContext<WishContextObj>({
    items: [],
    isLoadingState: false,
    isModalOpen: false,
    setModalState: (isOpen: boolean) => {},
    updateItems: () => {},
    addWish: async () => {},
    fetchWishes: async () => {},
    removeWish: async (id: string) => {},
});

const WishesContextProvider: React.FC = (props) => {
    const [isLoading, setIsloading] = useState<boolean>(true);
    const [isModal, setIsModal] = useState<boolean>(false);
    const [wishes, setWishes] = useState<Wish[]>([]);

    // const addWishHandler = (wishTitle: string, tag: string, description: string) => {
    //     const wish = new Wish(wishTitle, tag, description);
    //     setWishes((prev) => prev.concat(wish))
    //     setWishes((prev) => prev.filter((wish) => wish.id !== id));
    // };

    const addWishHandler = async (data: SendWishData) => {
        setIsloading(true);
        const response = await fetch('api/new-wish', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json'
            }
        })

        if(response.ok) {
            const res = await response.json();
            console.log(res)
            await fetchWishesHandler();
            setIsloading(false);
            setIsModal(false);
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

    const fetchWishesHandler = async () => {
        setIsloading(true);
        const res = await fetch('api/wishes');
        const result = await res.json();
        setWishes(result.wishes)
        setIsloading(false)
    }

    const updateItemsHandler = (items: Wish[]) => {
        setIsloading(true);
        setWishes(items)
        setIsloading(false)
    };

    const setModalStateHandler = (isOpen: boolean | ((prevState: boolean) => boolean)) => {
        setIsModal(isOpen)
    }

    const contextValue: WishContextObj = {
        items: wishes,
        isLoadingState: isLoading,
        isModalOpen: isModal,
        setModalState: setModalStateHandler,
        addWish: addWishHandler,
        updateItems: updateItemsHandler,
        fetchWishes: fetchWishesHandler,
        removeWish: removeWishHandler,
    };

    return <WishesContext.Provider value={contextValue}>{props.children}</WishesContext.Provider>
};

export default WishesContextProvider;
