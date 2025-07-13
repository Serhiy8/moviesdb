import { Link } from "react-router-dom"
import { supabaseSignup } from "../components/operations/supabaseService";
import { SignupLayout } from "../components/signInOutLayout/SignupLayout";

export const Signup = () => {

    const handldesubmit = (newUser) => {        
        supabaseSignup(newUser)
    }
    
    return(
        <SignupLayout handldesubmit={handldesubmit}/>
    )
}