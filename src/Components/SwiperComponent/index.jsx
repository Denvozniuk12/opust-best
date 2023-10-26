import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Autoplay, A11y } from 'swiper/modules';
import { leftButtonIcon, rightButtonIcon } from '../../Img/Buttons';
import 'swiper/css';
import 'swiper/css/effect-fade';
import useButton from './hooks/useButton';

const MySwiper = (props) => {
  const { slides, classN, spBetween, slPerView = 1, topValue = '0', isAutoplay = true, effect = 'undefined' } = props;
  
  const autoplayParams = isAutoplay ? { delay: 3000, disableOnInteraction: false } : false;
  const modules = effect === 'fade' ? [Navigation, Autoplay, A11y, EffectFade] : [Navigation, Autoplay, A11y];
  const { button } = useButton();
  const buttonLeft = effect === 'fade' ? '' : button('left-circle', leftButtonIcon);
  const buttonRight = effect === 'fade' ? '' : button('right-circle', rightButtonIcon);
  const btnLeftFadeClass = effect === 'fade' ? 'swiper-btn-prev-fade' : '';
  const btnRightFadeClass = effect === 'fade' ? 'swiper-btn-next-fade' : '';
  
  return (
    <Swiper
        modules={modules}
        spaceBetween={spBetween}
        slidesPerView={slPerView}
        navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
        }}
        className={classN}
        autoplay={autoplayParams}
        effect={effect}
        grabCursor={true}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>{slide}</SwiperSlide>
      ))}
        <div className={"swiper-button swiper-button-prev" + " " + btnLeftFadeClass} style={{top: topValue}}>{buttonLeft}</div>
        <div className={"swiper-button swiper-button-next" + " " + btnRightFadeClass} style={{top: topValue}}>{buttonRight}</div>
    </Swiper>
  );
};

export default MySwiper;