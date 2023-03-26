import React, {useState} from 'react';
import {useActions} from "../../hooks/useActions";
import Form from "./Form";
import {LinkEnum} from "../../utils/routes";
import ErrorHoc from "./ErrorHoc";

const Registration = () => {
    const {authThunk} = useActions()
    const [message, setMessage] = useState<null | string>(null)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const login = data.get('login') as string
        const pass = data.get('password') as string
        try {
            authThunk.registration(login, pass)
            setMessage('You have successfully registered')
        } catch {
            setMessage('Error during authorization attempt')
        }
    }

    const WrappedForm = ErrorHoc(Form)

    return (
        <WrappedForm
            message={message}
            handleSubmit={handleSubmit}
            formName={'Sign up'}
            redirectText={'Already have an account? Sign in'}
            redirectLink={LinkEnum.LOGIN}/>
    );
};

export default Registration;