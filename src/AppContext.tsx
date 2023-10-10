"use client"

import React, { useState, createContext } from "react";

interface IItem {
    id: string;
    title: string;
    complete: boolean;
}
interface IApp {
    theme: boolean;
    setTheme: React.Dispatch<React.SetStateAction<boolean>>;
    handlerTheme: () => void;
    inputValue: string;
    setInputValue: React.Dispatch<React.SetStateAction<string>>;
    getInputValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
    items: IItem[];
    setItems: React.Dispatch<React.SetStateAction<IItem[]>>;
    addItems: () => void;
    deleteItems: (id: string) => void;
    updateTodo: (id: string) => void;
    editToggleItem: (id: string) => void;

};
interface IAppProvider {
    children: React.ReactNode;

};

export const AppContext = createContext<IApp>({} as IApp)

export const AppContextProvider: React.FC<IAppProvider> = ({ children }) => {
    const [theme, setTheme] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>("");
    const [items, setItems] = useState<IItem[]>([]);

    const handlerTheme = () => {
        setTheme(!theme)
    };
    const getInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)

    };
    const addItems = () => {
        if (inputValue.trim() !== "") {
            setItems([...items, { id: new Date().toISOString(), title: inputValue, complete: false }]);
            return setInputValue("")
        } else {
            return;
        }
    };
    const deleteItems = (id: string) => {
        const newTask = (items.filter((items) => items.id !== id));
        setItems(newTask)
        setInputValue("")
    };
    const updateTodo = (id: string) => {
        const index = items.findIndex((item) => item.id === id);
        const newArray = [...items];
        newArray[index].title = inputValue;
        newArray[index].complete = !newArray[index].complete,
            setItems(newArray)
        setInputValue("")
    };
    const editToggleItem = (id: string) => {
        const index = items.findIndex((item) => item.id === id);
        const newItems = [...items]
        setInputValue(newItems[index].title)
        newItems[index].complete = !newItems[index].complete;
    };

    return (
        <AppContext.Provider
            value={{
                theme, setTheme, handlerTheme,
                inputValue, setInputValue,
                getInputValue, addItems,
                items, setItems, deleteItems,
                updateTodo, editToggleItem
            }}>
            {children}
        </AppContext.Provider>
    );
};

