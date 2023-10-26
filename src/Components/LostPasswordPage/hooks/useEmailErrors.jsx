import { useTranslation } from 'react-i18next';

const useEmailErrors = (email, setEmailError) => {
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

export default useEmailErrors;