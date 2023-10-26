const useCheckboxChange = (rememberMe: boolean, setRememberMe: React.Dispatch<React.SetStateAction<boolean>>) => {
    const handleRememberMeChange = () => {
        setRememberMe(() => !rememberMe);
    }
    return { handleRememberMeChange };
}

export default useCheckboxChange;