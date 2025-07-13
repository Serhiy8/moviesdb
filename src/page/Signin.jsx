
import { supabaseSignin } from "../components/operations/supabaseService";
import { SigninLayout } from "../components/signInOutLayout/SigninLayout";

export const Signin = () => {

    const handldesubmit = (user) => {        
        supabaseSignin(user)
    }
    
    return(
        <SigninLayout handldesubmit={handldesubmit}/>
    )
}