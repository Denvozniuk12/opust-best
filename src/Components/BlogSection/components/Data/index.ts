import { IScreenWidthData } from "../../../../types/data";

const BlogSectionData = () => {
    const initialState: number = 6;
    const blogBodyData: IScreenWidthData[] = [
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