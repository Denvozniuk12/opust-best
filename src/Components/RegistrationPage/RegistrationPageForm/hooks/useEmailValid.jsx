const useEmailValid = () => {
    const isValidEmail = (email) => {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    }
    return { isValidEmail };
}

export default useEmailValid;