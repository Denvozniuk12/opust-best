import MySwiper from '../../SwiperComponent';
import Slides from '../../Slides';
import BlogSectionData from "./Data";
import useScreenResize from '../../../Hooks/useScreenResize';
import useResizeListener from '../../../Hooks/useResizeListener';

function BlogBody() {
    const { BlogSlider } = Slides();
    const blogSlider: JSX.Element[] = BlogSlider();
    const { initialState, blogBodyData } = BlogSectionData();
    const { slPerView, handleScreenWidthResizeForSlides } = useScreenResize(initialState);

    useResizeListener(handleScreenWidthResizeForSlides, blogBodyData);

    return (
        <div className='blog-body'>
            <MySwiper
                slides={blogSlider}
                classN={'swiper-blog'}
                spBetween={10}
                slPerView={slPerView}
                topValue={56 + '%'}
            />
        </div>
    );
}

export default BlogBody;
