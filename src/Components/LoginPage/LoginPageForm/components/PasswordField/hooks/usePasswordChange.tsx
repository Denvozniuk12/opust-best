const usePasswordChange = (setPassword: React.Dispatch<React.SetStateAction<string>>, setPasswordError: React.Dispatch<React.SetStateAction<string>>) => {
    const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const value = event.target.value;
        setPassword(value);
        setPasswordError('');
    };
    return { handlePasswordChange };
}

export default usePasswordChange;