import { Link } from "react-router-dom";
import { Thumb } from "./signupInLayout.styled";
import { useFormChange } from "../operations/helpers";

export const SigninLayout = ({handldesubmit}) => {

    const {value, handleChange} = useFormChange()

    const onSubmitForm = (e) => {
        e.preventDefault();
        if(value.email === '' || value.password === ''){
            return;
        }        
        handldesubmit(value)
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
                    <button type="submit">Sign Up</button>
                </div>
            </form>
        </Thumb>
    </div>
    )
}