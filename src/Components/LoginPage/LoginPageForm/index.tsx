import React from "react";
import { useState } from 'react';
import UsernameField from './components/UsernameField';
import PasswordField from './components/PasswordField';
import CheckboxField from "./components/CheckboxField";
import SubmitButton from "./components/SubmitButton";
import LoginLinks from "./components/LoginLinks";
import useSubmit from "./hooks/useSubmit";

function LoginPageForm() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [emailError, setEmailError] = useState<string>('');
    const [passwordError, setPasswordError] = useState<string>('');
    const [rememberMe, setRememberMe] = useState<boolean>(false);

    const { handleSubmit } = useSubmit(email, setEmailError, password, setPasswordError);

    return (
        <form onSubmit={handleSubmit} className='login-form'>
            <UsernameField 
              email={email}
              setEmail={setEmail}
              emailError={emailError}
              setEmailError={setEmailError}
            />
            <PasswordField 
              password={password}
              setPassword={setPassword}
              passwordError={passwordError}
              setPasswordError={setPasswordError}
            />
            <CheckboxField 
              rememberMe={rememberMe}
              setRememberMe={setRememberMe}
            />
            <SubmitButton />
            <LoginLinks />
        </form>
    );
}

export default LoginPageForm;