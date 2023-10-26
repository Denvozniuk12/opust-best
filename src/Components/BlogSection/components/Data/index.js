const BlogSectionData = () => {
    const initialState = 6;
    const blogBodyData = [
        {
            width: 768,
            slidesPerView: 1,
        },
        {
            width: 1024,
            slidesPerView: 2,
        },
        {
            width: 1224,
            slidesPerView: 4,
        },
    ];

    return {
        initialState,
        blogBodyData,
    }
}

export default BlogSectionData;