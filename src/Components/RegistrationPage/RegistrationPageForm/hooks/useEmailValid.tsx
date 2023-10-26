const useEmailValid = () => {
    const isValidEmail = (email: string) => {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    }
    return { isValidEmail };
}

export default useEmailValid;