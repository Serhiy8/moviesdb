import { Link } from "react-router-dom"
import { useState } from "react";
import { supabaseSignup } from "../components/operations/authService";

export const Signup = () => {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    
    const onInputChange = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmail(e.target.value);
                break;
            case 'password':
                    setPassword(e.target.value);
                break;        
            default:
                break;
        }
    }

    const handldesubmit = (e) => {
        e.preventDefault();
        if(email === '' || password === ''){
            return;
        }
        supabaseSignup({email, password})
    }
    
    return(
        <form style={{marginTop: 150}} onSubmit={handldesubmit}>
            <h2>Sing up now!</h2>
            <p>Already have an account? <Link to="/signin">Sign in</Link></p>
            <div>
                <input type="email" name="email" onChange={onInputChange}/>
                <input type="password" name="password" onChange={onInputChange}/>
                <button type="submit">Sign Up</button>
            </div>
        </form>
    )
}