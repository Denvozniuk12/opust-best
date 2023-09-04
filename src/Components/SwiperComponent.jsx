import React from 'react';
import { useEffect } from 'react';
import { useState } from "react";
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination, Scrollbar, Autoplay, A11y } from 'swiper/modules';
import { LeftButton, RightButton } from './Buttons';
import 'swiper/css';
import 'swiper/css/effect-fade';

const MySwiper = (props) => {
  const { slides, classN, spBetween, slPerView = 1, topValue = '0', isAutoplay = true, effect = 'undefined' } = props;
  const autoplayParams = isAutoplay ? { delay: 3000, disableOnInteraction: false } : false;
  const modules = [Navigation, Autoplay, A11y];
  let buttonLeft = LeftButton();
  let buttonRight = RightButton();
  let btnLeftFadeClass = '';
  let btnRightFadeClass = '';
  if (effect === 'fade') {
    modules.push(EffectFade);
    buttonLeft = '';
    buttonRight = '';
    btnLeftFadeClass = 'swiper-btn-prev-fade';
    btnRightFadeClass = 'swiper-btn-next-fade';
  }
  
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