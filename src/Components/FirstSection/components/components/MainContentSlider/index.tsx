import MySwiper from '../../../../SwiperComponent';
import Slides from '../../../../Slides';

function MainContentSlider() {
    const { SliderSlides } = Slides();
    const sliderSlides: JSX.Element[] = SliderSlides();
    return (
        <div>
            <MySwiper 
              slides={sliderSlides}
              classN={'mySwiper'}
              spBetween={30}
              topValue={50 + "%"}
              isAutoplay={false}
              effect={'fade'}
            />
            <div className='min-h-50px'></div>
        </div>
    );
}

export default MainContentSlider;
