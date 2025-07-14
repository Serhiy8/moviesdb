import { useState } from "react";
import { Navigate } from "react-router-dom";

export const useFormChange = () => {
    const [value, setValue] = useState({email: '', password: ''});
    const handleChange = (e) => {
        const {value, name} = e.target;
        setValue(prev => ({
            ...prev,
            [name]: value,
        }))
    }
    return {value, handleChange}
}
