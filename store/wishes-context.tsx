import moment from "moment";
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
    isActualWishes: boolean,
    setModalState: (isOpen: boolean) => void,
    addWish: (data: SendWishData) => Promise<void>,
    removeWish: (id: string) => Promise<void>,
    fetchWishes: () => Promise<void>,
    getWishFullData: (id: string) => Promise<void>
}

export const WishesContext = React.createContext<WishContextObj>({
    items: [],
    isLoadingState: false,
    isModalOpen: false,
    isActualWishes: false,
    setModalState: (isOpen: boolean) => {},
    // updateItems: () => {},
    addWish: async () => {},
    fetchWishes: async () => {}, 
    removeWish: async (id: string) => {},
    getWishFullData: async (id: string) => {},
});

const WishesContextProvider: React.FC = (props) => {
    const [isLoading, setIsloading] = useState<boolean>(true);
    const [isDataCurrent, setDataIsCurrent] = useState<boolean>(false);
    const [isModal, setIsModal] = useState<boolean>(false);
    const [wishes, setWishes] = useState<Wish[]>([]);

    const addWishHandler = async (data: SendWishData) => {
        setDataIsCurrent(false);
        setIsloading(true);
        const {title, category, description, date} = data;
        const response = await fetch('api/new-wish', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json'
            }
        })

        if(response.ok) {
            const {message, newId} = await response.json();
            const newWish: Wish = new Wish(title, category, description, newId)
            // await fetchWishesHandler();
            setWishes((prev) => prev = [newWish, ...prev])

            setIsloading(false);
            setIsModal(false);
        }
    }

    const removeWishHandler = async (id: string) => {
        setDataIsCurrent(false);

        setWishes((prev) => {
            return prev.filter((wish) => wish.id !== id)
        });
        
        const res = await fetch('api/delete-wish', {
            method: "DELETE",
            body: id,
        })

        if (res.ok) {
            const result = await res.json();
        }
    };

    const fetchWishesHandler = async () => {
        setIsloading(true);
        const res = await fetch('api/wishes');
        const result = await res.json();

        result.wishes.sort((a: any, b: any) => Date.parse(b.date) - Date.parse(a.date))
        
        setWishes(result.wishes)
        setIsloading(false)
        setDataIsCurrent(true)
    }

    const setModalStateHandler = (isOpen: boolean | ((prevState: boolean) => boolean)) => {
        setIsModal(isOpen)
    }

    const getWishHandler = async (id: string) => {
         const response = await fetch(`api/get-wish/?${id}`);

        if(response.ok) {
            const result = await response.json();
            return result;
        }
    }

    // const updateItemsHandler = (items: Wish[]) => {
    //     setIsloading(true);
    //     setWishes(items);
    //     setIsloading(false);
    // };

    const contextValue: WishContextObj = {
        items: wishes,
        isLoadingState: isLoading,
        isModalOpen: isModal,
        isActualWishes: isDataCurrent,
        setModalState: setModalStateHandler,
        addWish: addWishHandler,
        // updateItems: updateItemsHandler,
        fetchWishes: fetchWishesHandler,
        getWishFullData: getWishHandler,
        removeWish: removeWishHandler,
    };

    return <WishesContext.Provider value={contextValue}>{props.children}</WishesContext.Provider>
};

export default WishesContextProvider;
