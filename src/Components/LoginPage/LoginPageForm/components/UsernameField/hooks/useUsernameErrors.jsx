import { useTranslation } from 'react-i18next';

const useUsernameErrors = (email, setEmailError) => {
    const { t } = useTranslation();
    const handleEmailErrors = () => {
        if (!email) {
            setEmailError(t('Required'));
        } 
        else {
            setEmailError('');
        }
    }
    return { handleEmailErrors };
}

export default useUsernameErrors;