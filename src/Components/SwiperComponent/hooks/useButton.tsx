function useButton() {
    const button = (ariaLabel: string, iconButton: JSX.Element) => {
        return (
            <button>
                <span role="img" aria-label={ariaLabel} className="swiper-button-span">
                    {iconButton}
                </span>
            </button>
        );
    }

    return { button };
}

export default useButton;