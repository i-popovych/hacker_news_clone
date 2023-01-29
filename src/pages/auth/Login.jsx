import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {login} from "../../redux/authReducer";

const Login = () => {
    const [username, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch();

    const loginClick = (e) => {
        e.preventDefault();
        dispatch(login(username, password));
    }

    return (
        <div>
            <form action="#">
                <input value={username} onChange={e => setLogin(e.target.value)}/>
                <input value={password} onChange={e => setPassword(e.target.value)}/>
                <button onClick={loginClick}>send</button>
            </form>
        </div>
    );
};

export default Login;