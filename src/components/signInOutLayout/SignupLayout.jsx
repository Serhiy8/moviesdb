import { Link } from "react-router-dom";
import { Thumb } from "./signupInLayout.styled";
import { useFormChange } from "../operations/helpers";

export const SignupLayout = ({handldesubmit}) => {

    const {value, handleChange} = useFormChange();

    const onSubmitForm = (e) => {
        e.preventDefault();
        if(value.email.trim() === '' || value.password.trim() === ''){
            return;
        }
        handldesubmit(value)
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