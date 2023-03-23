import { useState } from "react";

export const useSessionStorage = (key, initialValue) => {
    const [state, setState] = useState(() => {
        const jsonState = sessionStorage.getItem(key);

        return jsonState ? JSON.parse(jsonState) : initialValue
    });

    const setSessionStorageState = (value) => {
        Object.keys(value).length === 0 
            ? sessionStorage.removeItem(key) 
            : sessionStorage.setItem(key, JSON.stringify(value));
        
        setState(value);
    }

    return [
        state,
        setSessionStorageState
    ]
};