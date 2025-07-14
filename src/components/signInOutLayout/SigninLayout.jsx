import { Link } from "react-router-dom";
import { Thumb } from "./signupInLayout.styled";
import { useFormChange } from "../operations/helpers";
import { toast } from "react-toastify";

export const SigninLayout = ({handldeSubmit}) => {

    const {value, handleChange} = useFormChange()

    const onSubmitForm = (e) => {
        e.preventDefault();
        if(value.email.trim() === '' || value.password.trim() === ''){
            toast.warning("Fields can't be empty.")
            return;
        }        
        handldeSubmit(value)
    }
    

    return(
    <div className="container">
        <Thumb>
            <form onSubmit={onSubmitForm}>
                <h2>Sing in now!</h2>
                <p>Already don't have an account? <Link to="/signup">Sign up</Link></p>
                <div>
                    <input type="email" name="email" onChange={handleChange}/>
                    <input type="password" name="password" onChange={handleChange}/>
                    <button type="submit">Sign in</button>
                </div>
            </form>
        </Thumb>
    </div>
    )
}