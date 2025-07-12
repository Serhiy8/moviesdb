import { Link } from "react-router-dom"
import { useState } from "react";
import { supabaseSignin } from "../components/operations/authService";

export const Signin = () => {

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
            console.log("Fields can't be empty")
            return;
        }
        supabaseSignin({email, password})
    }
    
    return(
        <form style={{marginTop: 150}} onSubmit={handldesubmit}>
            <h2>Sing in!</h2>
            <p>Don't have account? <Link to="/moviesdb/signup">Sign up</Link></p>
            <div>
                <input type="email" name="email" onChange={onInputChange}/>
                <input type="password" name="password" onChange={onInputChange}/>
                <button type="submit">Sign In</button>
            </div>
        </form>
    )
}