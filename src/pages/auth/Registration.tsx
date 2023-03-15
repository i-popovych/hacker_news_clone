import React, {useState} from 'react';
import {useActions} from "../../hooks/useActions";

const Registration = () => {
    const [username, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const {authThunk} = useActions()

    const registrClick = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        authThunk.registration(username, password)
    }

    return (
        <div>
            <form action="#">
                <input value={username} onChange={e => setLogin(e.target.value)}/>
                <input value={password} onChange={e => setPassword(e.target.value)}/>
                <button onClick={registrClick}>send</button>
            </form>
        </div>
    );
};

export default Registration;