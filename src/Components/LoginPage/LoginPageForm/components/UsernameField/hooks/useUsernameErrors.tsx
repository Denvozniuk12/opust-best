import { useTranslation } from 'react-i18next';

const useUsernameErrors = (email: string, setEmailError: React.Dispatch<React.SetStateAction<string>>) => {
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