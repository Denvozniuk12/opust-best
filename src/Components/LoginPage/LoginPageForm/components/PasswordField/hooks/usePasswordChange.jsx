const usePasswordChange = (setPassword, setPasswordError) => {
    const handlePasswordChange = (event) => {
        const value = event.target.value;
        setPassword(value);
        setPasswordError('');
    };
    return { handlePasswordChange };
}

export default usePasswordChange;