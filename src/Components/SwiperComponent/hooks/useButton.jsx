import React from "react";

function useButton() {
    const button = (ariaLabel, iconButton) => {
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