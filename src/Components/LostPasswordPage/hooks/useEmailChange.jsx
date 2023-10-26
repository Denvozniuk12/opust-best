const useEmailChange = (setEmail, setEmailError) => {
    const handleEmailChange = (event) => {
        const value = event.target.value;
        setEmail(value);
        setEmailError('');
    };
    return { handleEmailChange };
}

export default useEmailChange;