import { TFunction } from "i18next";
import useEmailValid from "../../../hooks/useEmailValid";

const useEmailErrors = (email: string, setEmailError: React.Dispatch<React.SetStateAction<string>>, t: TFunction<"translation", undefined>) => {
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