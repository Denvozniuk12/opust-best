import { useTranslation } from 'react-i18next';

const useSubmit = (email: string, setEmailError: React.Dispatch<React.SetStateAction<string>>) => {
    const { t } = useTranslation();
    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();

        if (!email) {
            setEmailError(t('Required'));
        }
        else {
            window.location.href = '/#/';
        }
    };
    return { handleSubmit };
}

export default useSubmit;