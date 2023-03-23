import { useState } from "react";

export const useForm = (initialValues, onSubmitHandler) => {
    const [values, setValues] = useState(initialValues);

    const changeHandler = (e) => {
        setValues(state => ({...state, [e.target.name]: e.target.value}));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        onSubmitHandler(values);
        setValues(initialValues);

        console.log('Check if setValues(initialValues) works properly');
    }

    return {
        values,
        changeHandler,
        onSubmit
    }
};