import MySwiper from '../../../../SwiperComponent';
import Slides from '../../../../Slides';
import { useTranslation } from 'react-i18next';
import booksScreenWidthData from './Data/screenWidthData';
import useScreenResize from '../../../../../Hooks/useScreenResize';
import useResizeListener from '../../../../../Hooks/useResizeListener';

function Books() {
    const { BooksSlider } = Slides();
    const booksSlides: JSX.Element[] = BooksSlider();
    const { t } = useTranslation();
    const initialState: number = 6;
    const { slPerView, handleScreenWidthResizeForSlides } = useScreenResize(initialState);

    useResizeListener(handleScreenWidthResizeForSlides, booksScreenWidthData);
    return (
        <div>
            <h2 className='h2 books-h2'>{t('New Books')}</h2>
            <MySwiper
                slides={booksSlides}
                classN={'swiper-books'}
                spBetween={10}
                slPerView={slPerView}
                topValue={56 + '%'}
            />
            <div className='min-h-50px'></div>
        </div>
    );
}

export default Books;
