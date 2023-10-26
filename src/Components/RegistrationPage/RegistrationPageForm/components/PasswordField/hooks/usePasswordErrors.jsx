const usePasswordErrors = (password, setPasswordError, t) => {
    const handlePasswordErrors = () => {
        if (!password) {
            setPasswordError(t('Required'));
        } else if (password.length < 3) {
            setPasswordError(t('Must be more than 3 characters'));
        } else {
            setPasswordError('');
        }
    }
    return { handlePasswordErrors };
}

export default usePasswordErrors;