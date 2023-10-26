import { useTranslation } from 'react-i18next';

const useSubmit = (email: string, setEmailError: React.Dispatch<React.SetStateAction<string>>,
     password: string, setPasswordError: React.Dispatch<React.SetStateAction<string>>) => {
    const { t } = useTranslation();
    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        let error: boolean = false;

        if (!email) {
            setEmailError(t('Required'));
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
    };
    return { handleSubmit };
}

export default useSubmit;