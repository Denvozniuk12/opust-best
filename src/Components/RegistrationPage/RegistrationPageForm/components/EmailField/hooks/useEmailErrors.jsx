import useEmailValid from "../../../hooks/useEmailValid";

const useEmailErrors = (email, setEmailError, t) => {
    const { isValidEmail } = useEmailValid();
    const handleEmailErrors = () => {
        if (!email) {
            setEmailError(t('Required'));
        } else if (!isValidEmail(email)) {
            setEmailError(t('Invalid Email Adress'));
        } else {
            setEmailError('');
        }
    }

    return { handleEmailErrors };
}

export default useEmailErrors;