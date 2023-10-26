import { TFunction } from "i18next";

const usePasswordErrors = (password: string, setPasswordError: React.Dispatch<React.SetStateAction<string>>, t: TFunction<"translation", undefined>) => {
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