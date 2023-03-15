import React, {useState} from 'react';
import {useActions} from "../../hooks/useActions";

const Login = () => {
    const [username, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const {authThunk} = useActions()
    const loginClick = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        authThunk.login(username, password)
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