import useEmailValid from "./useEmailValid";

const useSubmit = (email, setEmailError, t, password, setPasswordError) => {
    const { isValidEmail } = useEmailValid();
    const handleSubmit = (event) => {
        event.preventDefault();
        let error = false;

        if (!email) {
            setEmailError(t('Required'));
            error = true;
        } else if (!isValidEmail(email)) {
            setEmailError(t('Invalid Email Adress'));
            error = true;
        }

        if (!password) {
            setPasswordError(t('Required'));
            error = true;
        } else if (password.length < 3) {
            setPasswordError(t('Must be more than 3 characters'));
            error = true;
        }

        if(!error){
            window.location.href = '/#/';
        }
    }
    return { handleSubmit };
}

export default useSubmit;