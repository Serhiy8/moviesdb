import { Link } from "react-router-dom";
import { Thumb } from "./signupInLayout.styled";
import { useFormChange } from "../operations/helpers";
import { toast } from "react-toastify";

export const SignupLayout = ({handldeSubmit}) => {

    const {value, handleChange} = useFormChange();

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
                <h2>Sing up now!</h2>
                <p>Already have an account? <Link to="/signin">Sign in</Link></p>
                <div>
                    <input type="email" name="email" onChange={handleChange}/>
                    <input type="password" name="password" onChange={handleChange}/>
                    <button type="submit">Sign Up</button>
                </div>
            </form>
        </Thumb>
    </div>
    )
}