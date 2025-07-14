import { Link } from "react-router-dom"
import { supabaseSignup } from "../components/operations/supabaseService";
import { SignupLayout } from "../components/signInOutLayout/SignupLayout";
import { toast } from "react-toastify";

export const Signup = () => {

    const handldeSubmit = async(newUser) => {        
        const response = await supabaseSignup(newUser);
        if(response){
            toast.warning(`${response}`);
            return;
        }
    }
    
    return(
        <SignupLayout handldeSubmit={handldeSubmit}/>
    )
}