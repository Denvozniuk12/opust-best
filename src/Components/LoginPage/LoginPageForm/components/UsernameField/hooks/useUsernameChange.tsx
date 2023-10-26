const useUsernameChange = (setEmail: React.Dispatch<React.SetStateAction<string>>, setEmailError: React.Dispatch<React.SetStateAction<string>>) => {
    const handleEmailChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const value = event.target.value;
        setEmail(value);
        setEmailError('');
    }
    return { handleEmailChange };
}

export default useUsernameChange;