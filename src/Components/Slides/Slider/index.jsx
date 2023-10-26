import { imageFirstSectionSlider1, imageFirstSectionSlider2, imageFirstSectionSlider3, imageFirstSectionSlider4 } from '../../../Img/FirstSection/Slider';

function SliderSlides(){
    const cards = [
        {
            divClass: 'slider-slide',
            image: imageFirstSectionSlider1,
            h2: 'Welcome To Opus',
            h3: ''
        },
        {
            divClass: 'slider-slide',
            image: imageFirstSectionSlider2,
            h2: 'Happy New Year',
            h3: 'Explore our roundup of the month\'s new books'
        },
        {
            divClass: 'slider-slide slider-slide-center',
            image: imageFirstSectionSlider3,
            h2: 'Zygmunt Bauman (1925 - 2017)',
            h3: 'One of the most relevant intellectuals of the 20th century'
        },
        {
            divClass: 'slider-slide slider-slide-end',
            image: imageFirstSectionSlider4,
            h2: 'Gillian Flynn',
            h3: 'The #1 New York Times Bestselling Author'
        }
    ];
    const slides = cards.map((card, index) => {
        return (
            <div key={index} className={card.divClass}>
                <img src={card.image} alt="Featured Category" className="slider-slide-img" />
                <div id={"slider-slide-content-" + (index + 1)} className="slider-slide-content slide-in">
                    <h2 className="slider-slide-h2">{card.h2}</h2>
                    <h3 className="slider-slide-h3">{card.h3}</h3>
                </div>
            </div>
        );
    });
    return slides;
}

export default SliderSlides;