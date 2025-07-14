
import { toast } from "react-toastify";
import { supabaseSignin } from "../components/operations/supabaseService";
import { SigninLayout } from "../components/signInOutLayout/SigninLayout";

export const Signin = () => {

    const handldeSubmit = async (user) => {        
        const response = await supabaseSignin(user);
          if(response){
            toast.warning(`${response}`);
            return;
          }
    }
    
    return(
        <SigninLayout handldeSubmit={handldeSubmit}/>
    )
}