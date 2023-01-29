import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {registration} from "../../redux/authReducer";

const Registration = () => {
    const [username, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch();

    const registrClick = (e) => {
        e.preventDefault();
        dispatch(registration(username, password));
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