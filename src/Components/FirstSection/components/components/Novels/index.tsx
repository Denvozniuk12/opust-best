import MySwiper from '../../../../SwiperComponent';
import Slides from '../../../../Slides';
import { useTranslation } from 'react-i18next';
import novelsScreenWidthData from './Data/screenWidthData';
import useScreenResize from '../../../../../Hooks/useScreenResize';
import useResizeListener from '../../../../../Hooks/useResizeListener';

function Novels() {
    const { NovelsSlider } = Slides();
    const novelsSlider: JSX.Element[] = NovelsSlider();
    const { t } = useTranslation();
    const initialState: number = 6;
    const { slPerView, handleScreenWidthResizeForSlides } = useScreenResize(initialState);
    
    useResizeListener(handleScreenWidthResizeForSlides, novelsScreenWidthData);

    return (
        <div>
            <h2 className='h2 novels-h2'>{t('Novels')}</h2>
            <MySwiper
                slides={novelsSlider}
                classN={'swiper-novels'}
                spBetween={10}
                slPerView={slPerView}
                topValue={56 + '%'}
            />
            <div className='min-h-50px'></div>
        </div>
    );
}

export default Novels;
