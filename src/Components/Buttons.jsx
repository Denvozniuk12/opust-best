import React from "react";

export function RightButton() {
    const svg = (
        <svg viewBox="64 64 896 896" focusable="false" data-icon="right-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true" className="swiper-button-svg">
            <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm154.7 454.5l-246 178c-5.3 3.8-12.7 0-12.7-6.5v-46.9c0-10.2 4.9-19.9 13.2-25.9L566.6 512 421.2 406.8c-8.3-6-13.2-15.6-13.2-25.9V334c0-6.5 7.4-10.3 12.7-6.5l246 178c4.4 3.2 4.4 9.8 0 13z"></path>
        </svg>
    );
    return (
        <button>
            <span role="img" aria-label="right-circle" className="swiper-button-span">
                {svg}
            </span>
        </button>
    );
}

export function LeftButton() {
    const svg = (
        <svg viewBox="64 64 896 896" focusable="false" data-icon="left-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true" className="swiper-button-svg">
            <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm104 316.9c0 10.2-4.9 19.9-13.2 25.9L457.4 512l145.4 105.2c8.3 6 13.2 15.6 13.2 25.9V690c0 6.5-7.4 10.3-12.7 6.5l-246-178a7.95 7.95 0 010-12.9l246-178a8 8 0 0112.7 6.5v46.8z"></path>
        </svg>
    );
    return (
        <button>
            <span role="img" aria-label="left-circle" className="swiper-button-span">
                {svg}
            </span>
        </button>
    );
}