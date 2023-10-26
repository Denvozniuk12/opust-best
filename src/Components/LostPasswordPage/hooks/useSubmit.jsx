import { useTranslation } from 'react-i18next';

const useSubmit = (email, setEmailError) => {
    const { t } = useTranslation();
    const handleSubmit = (event) => {
        event.preventDefault();

        if (!email) {
            setEmailError(t('Required'));
        }
        else {
            window.location.href = '/login';
        }
    };
    return { handleSubmit };
}

export default useSubmit;