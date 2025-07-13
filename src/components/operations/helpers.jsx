import { useState } from "react";

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