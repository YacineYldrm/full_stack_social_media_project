import "./LoginPage.scss";
import login from "../../utils/login";
import { useState } from "react";

const Login = ({ onLoginSuccess }) => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    console.log(email);
    console.log(password);

    const setEmailState = (e) => {
        setEmail(e.target.value);
    };

    const setPasswordState = (e) => {
        setPassword(e.target.value);
    };

    return (
        <>
            <form>
                <label onChange={setEmailState}>
                    User email:
                    <input type="text" placeholder="e.g. j.doe@mail.com" />
                </label>
                <label>
                    User password:
                    <input onChange={setPasswordState} type="password" />
                </label>
            </form>
            <button onClick={() => login(email, password, onLoginSuccess)}>
                Login
            </button>
        </>
    );
};

export default Login;
