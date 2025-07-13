import { Link } from "react-router-dom"
import { supabaseSignup } from "../components/operations/authService";
import { SignupLayout } from "../components/signInOutLayout/SignupLayout";

export const Signup = () => {

    const handldesubmit = (newUser) => {        
        supabaseSignup(newUser)
    }
    
    return(
        <SignupLayout handldesubmit={handldesubmit}/>
    )
}