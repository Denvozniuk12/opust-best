const useCheckboxChange = (rememberMe, setRememberMe) => {
    const handleRememberMeChange = () => {
        setRememberMe(() => !rememberMe);
    }
    return { handleRememberMeChange };
}

export default useCheckboxChange;