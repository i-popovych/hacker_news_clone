import * as React from 'react';
import {useActions} from "../../hooks/useActions";
import Form from './Form';
import {LinkEnum} from "../../utils/routes";
import {useState} from "react";
import ErrorHoc from './ErrorHoc';


export default function SignIn() {
    const {authThunk} = useActions()
    const [error, setError] = useState<null | string>(null);
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const login = data.get('login') as string
        const pass = data.get('password') as string
        try {
            await authThunk.login(login, pass)
        } catch (e) {
            setError('Error during authorization attempt')
        }
    };

    const WrappedForm = ErrorHoc(Form)

    return (
        <WrappedForm
            message={error}
            handleSubmit={handleSubmit}
            formName={'Sign in'}
            redirectLink={LinkEnum.REGISTRATION}
            redirectText={"Don't have an account? Sign Up"}/>
    );
}