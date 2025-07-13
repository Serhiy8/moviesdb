import { useState } from "react";
import { Link } from "react-router-dom";
import { Thumb } from "./signupLayout.styled";

export const SignupLayout = ({handldesubmit}) => {
    
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

    const onSubmitForm = (e) => {
        e.preventDefault();
        if(email === '' || password === ''){
            return;
        }
        handldesubmit({email, password})
    }
    

    return(
    <div className="container">
        <Thumb>
            <form onSubmit={onSubmitForm}>
                <h2>Sing up now!</h2>
                <p>Already have an account? <Link to="/signin">Sign in</Link></p>
                <div>
                    <input type="email" name="email" onChange={onInputChange}/>
                    <input type="password" name="password" onChange={onInputChange}/>
                    <button type="submit">Sign Up</button>
                </div>
            </form>
        </Thumb>
    </div>
    )
}