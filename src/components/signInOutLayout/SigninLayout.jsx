import { useState } from "react";
import { Link } from "react-router-dom";
import { Thumb } from "./signupInLayout.styled";

export const SigninLayout = ({handldesubmit}) => {
    
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
                <h2>Sing in now!</h2>
                <p>Already don't have an account? <Link to="/signup">Sign up</Link></p>
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