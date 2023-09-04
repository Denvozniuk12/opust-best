import React from "react";
import { Link } from 'react-router-dom';
import imageBlog1 from '../Img/Blog/1.webp';
import imageBlog2 from '../Img/Blog/2.webp';
import imageFirstSectionAuthors1 from '../Img/FirstSection/Authors/1.webp';
import imageFirstSectionAuthors2 from '../Img/FirstSection/Authors/2.webp';
import imageFirstSectionAuthors3 from '../Img/FirstSection/Authors/3.webp';
import imageFirstSectionBooks1 from '../Img/FirstSection/Books/1.webp';
import imageFirstSectionBooks2 from '../Img/FirstSection/Books/2.webp';
import imageFirstSectionBooks3 from '../Img/FirstSection/Books/3.webp';
import imageFirstSectionBooks4 from '../Img/FirstSection/Books/4.webp';
import imageFirstSectionBooks5 from '../Img/FirstSection/Books/5.webp';
import imageFirstSectionBooks6 from '../Img/FirstSection/Books/6.webp';
import imageFirstSectionBooks7 from '../Img/FirstSection/Books/7.webp';
import imageFirstSectionBooks8 from '../Img/FirstSection/Books/8.webp';
import imageFirstSectionBooks9 from '../Img/FirstSection/Books/9.webp';
import imageFirstSectionBooks10 from '../Img/FirstSection/Books/10.webp';
import imageFirstSectionBooks11 from '../Img/FirstSection/Books/11.webp';
import imageFirstSectionBooks12 from '../Img/FirstSection/Books/12.webp';
import imageFirstSectionBooks13 from '../Img/FirstSection/Books/13.webp';
import imageFirstSectionBooks14 from '../Img/FirstSection/Books/14.webp';
import imageFirstSectionBooks15 from '../Img/FirstSection/Books/15.webp';
import imageFirstSectionBooks16 from '../Img/FirstSection/Books/16.webp';
import imageFirstSectionBooks17 from '../Img/FirstSection/Books/17.webp';
import imageFirstSectionBooks18 from '../Img/FirstSection/Books/18.webp';
import imageFirstSectionCategories1 from '../Img/FirstSection/Categories/1.webp';
import imageFirstSectionCategories2 from '../Img/FirstSection/Categories/2.webp';
import imageFirstSectionCategories3 from '../Img/FirstSection/Categories/3.webp';
import imageFirstSectionCategories4 from '../Img/FirstSection/Categories/4.webp';
import imageFirstSectionCategories5 from '../Img/FirstSection/Categories/5.webp';
import imageFirstSectionCategories6 from '../Img/FirstSection/Categories/6.webp';
import imageFirstSectionCategories7 from '../Img/FirstSection/Categories/7.webp';
import imageFirstSectionCategories8 from '../Img/FirstSection/Categories/8.webp';
import imageFirstSectionCategories9 from '../Img/FirstSection/Categories/9.webp';
import imageFirstSectionCategories10 from '../Img/FirstSection/Categories/10.webp';
import imageFirstSectionCategories11 from '../Img/FirstSection/Categories/11.webp';
import imageFirstSectionCategories12 from '../Img/FirstSection/Categories/12.webp';
import imageFirstSectionNovels1 from '../Img/FirstSection/Novels/1.webp';
import imageFirstSectionNovels2 from '../Img/FirstSection/Novels/2.webp';
import imageFirstSectionNovels3 from '../Img/FirstSection/Novels/3.webp';
import imageFirstSectionNovels4 from '../Img/FirstSection/Novels/4.webp';
import imageFirstSectionNovels5 from '../Img/FirstSection/Novels/5.webp';
import imageFirstSectionNovels6 from '../Img/FirstSection/Novels/6.webp';
import imageFirstSectionNovels7 from '../Img/FirstSection/Novels/7.webp';
import imageFirstSectionNovels8 from '../Img/FirstSection/Novels/8.webp';
import imageFirstSectionNovels9 from '../Img/FirstSection/Novels/9.webp';
import imageFirstSectionNovels10 from '../Img/FirstSection/Novels/10.webp';
import imageFirstSectionNovels11 from '../Img/FirstSection/Novels/11.webp';
import imageFirstSectionNovels12 from '../Img/FirstSection/Novels/12.webp';
import imageFirstSectionNovels13 from '../Img/FirstSection/Novels/13.webp';
import imageFirstSectionNovels14 from '../Img/FirstSection/Novels/14.webp';
import imageFirstSectionNovels15 from '../Img/FirstSection/Novels/15.webp';
import imageFirstSectionNovels16 from '../Img/FirstSection/Novels/16.webp';
import imageFirstSectionNovels17 from '../Img/FirstSection/Novels/17.webp';
import imageFirstSectionNovels18 from '../Img/FirstSection/Novels/18.webp';
import imageFirstSectionSlider1 from '../Img/FirstSection/Slider/1.webp';
import imageFirstSectionSlider2 from '../Img/FirstSection/Slider/2.webp';
import imageFirstSectionSlider3 from '../Img/FirstSection/Slider/3.webp';
import imageFirstSectionSlider4 from '../Img/FirstSection/Slider/4.webp';
import imageSecondSectionBestBooks1 from '../Img/SecondSection/BestBooks/1.webp';
import imageSecondSectionBestBooks2 from '../Img/SecondSection/BestBooks/2.webp';
import imageSecondSectionBestBooks3 from '../Img/SecondSection/BestBooks/3.webp';


export function AuthorsSlides(){
    const images = [
        imageFirstSectionAuthors1,
        imageFirstSectionAuthors2,
        imageFirstSectionAuthors3,
        imageFirstSectionAuthors1,
        imageFirstSectionAuthors2,
        imageFirstSectionAuthors3
    ];
    const authorsName = ['Emma Cline', 'Stephen king', 'Jim Morisson', 'Emma Cline', 'Stephen king', 'Jim Morisson'];
    const cards = images.map((image, index) => {
        return {
            image: image,
            authorName: authorsName[index]
        };
    });
    const slides = cards.map((card, index) => {
        return(
            <Link key={index} to='/'>
                <div style={{ padding: '0' }} className="authors-card">
                    <div style={{ padding: '8px' }} className="authors-card-body">
                        <div className="w-full authors-card-div-img">
                            <img style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent' }} className="authors-card-img" src={card.image} alt={card.authorName} />
                        </div>
                        <p>{card.authorName}</p>
                    </div>
                </div>
            </Link>
        );
    })
    return slides;
}

export function SliderSlides(){
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

export function BooksSlider(){
    const categoryBook = {
        Essay: 'Essay',
        Philosophy: 'Philosophy',
        AutoHelp: 'Auto Help'
    }
    const imgP = {
        TopRated: 'Top Rated',
        Sale: 'Sale!',
    }
    const classImgP = {
        TopRated: 'img-p-tr',
        Sale: 'img-p-sl'
    }
    const describe = {
        categoryBookEssayDescribe: 'Discipline and Punish: The Birth of the Prison',
        categoryBookPhilosophyDescribe: 'The Agony of Eros',
        categoryBookAutoHelpDescribe: 'The Lords and The New Creatures'
    }
    const discountPrice = {
        categoryBookEssayPrice: 20,
        categoryBookPhilosophyPrice: 15,
        categoryBookAutoHelpPrice: 25
    }
    const cards = [
        {
            image: imageFirstSectionBooks1,
            imgP: imgP.TopRated,
            classImgP: classImgP.TopRated,
            categoryBook: categoryBook.Essay,
            describe: describe.categoryBookEssayDescribe,
            price: '$35',
            discountPrice: discountPrice.categoryBookEssayPrice,
            stars: false
        },
        {
            image: imageFirstSectionBooks2,
            imgP: imgP.Sale,
            classImgP: classImgP.Sale,
            categoryBook: categoryBook.Philosophy,
            describe: describe.categoryBookPhilosophyDescribe,
            price: '',
            discountPrice: discountPrice.categoryBookPhilosophyPrice,
            stars: true
        },
        {
            image: imageFirstSectionBooks3,
            imgP: '',
            classImgP: '',
            categoryBook: categoryBook.AutoHelp,
            describe: describe.categoryBookAutoHelpDescribe,
            price: '',
            discountPrice: discountPrice.categoryBookAutoHelpPrice,
            stars: false
        },
        {
            image: imageFirstSectionBooks4,
            imgP: imgP.TopRated,
            classImgP: classImgP.TopRated,
            categoryBook: categoryBook.Essay,
            describe: describe.categoryBookEssayDescribe,
            price: '',
            discountPrice: discountPrice.categoryBookEssayPrice,
            stars: false
        },
        {
            image: imageFirstSectionBooks5,
            imgP: imgP.Sale,
            classImgP: classImgP.Sale,
            categoryBook: categoryBook.Philosophy,
            describe: describe.categoryBookPhilosophyDescribe,
            price: '',
            discountPrice: discountPrice.categoryBookPhilosophyPrice,
            stars: false
        },
        {
            image: imageFirstSectionBooks6,
            imgP: '',
            classImgP: '',
            categoryBook: categoryBook.AutoHelp,
            describe: describe.categoryBookAutoHelpDescribe,
            price: '',
            discountPrice: discountPrice.categoryBookAutoHelpPrice,
            stars: false
        },
        {
            image: imageFirstSectionBooks7,
            imgP: imgP.TopRated,
            classImgP: classImgP.TopRated,
            categoryBook: categoryBook.Essay,
            describe: describe.categoryBookEssayDescribe,
            price: '',
            discountPrice: discountPrice.categoryBookEssayPrice,
            stars: false
        },
        {
            image: imageFirstSectionBooks8,
            imgP: imgP.Sale,
            classImgP: classImgP.Sale,
            categoryBook: categoryBook.Philosophy,
            describe: describe.categoryBookPhilosophyDescribe,
            price: '',
            discountPrice: discountPrice.categoryBookPhilosophyPrice,
            stars: false
        },
        {
            image: imageFirstSectionBooks9,
            imgP: '',
            classImgP: '',
            categoryBook: categoryBook.AutoHelp,
            describe: describe.categoryBookAutoHelpDescribe,
            price: '',
            discountPrice: discountPrice.categoryBookAutoHelpPrice,
            stars: false
        },
        {
            image: imageFirstSectionBooks10,
            imgP: imgP.TopRated,
            classImgP: classImgP.TopRated,
            categoryBook: categoryBook.Essay,
            describe: describe.categoryBookEssayDescribe,
            price: '$35',
            discountPrice: discountPrice.categoryBookEssayPrice,
            stars: false
        },
        {
            image: imageFirstSectionBooks11,
            imgP: imgP.Sale,
            classImgP: classImgP.Sale,
            categoryBook: categoryBook.Philosophy,
            describe: describe.categoryBookPhilosophyDescribe,
            price: '',
            discountPrice: discountPrice.categoryBookPhilosophyPrice,
            stars: false
        },
        {
            image: imageFirstSectionBooks12,
            imgP: '',
            classImgP: '',
            categoryBook: categoryBook.AutoHelp,
            describe: describe.categoryBookAutoHelpDescribe,
            price: '',
            discountPrice: discountPrice.categoryBookAutoHelpPrice,
            stars: false
        },
        {
            image: imageFirstSectionBooks13,
            imgP: imgP.TopRated,
            classImgP: classImgP.TopRated,
            categoryBook: categoryBook.Essay,
            describe: describe.categoryBookEssayDescribe,
            price: '',
            discountPrice: discountPrice.categoryBookEssayPrice,
            stars: false
        },
        {
            image: imageFirstSectionBooks14,
            imgP: imgP.Sale,
            classImgP: classImgP.Sale,
            categoryBook: categoryBook.Philosophy,
            describe: describe.categoryBookPhilosophyDescribe,
            price: '',
            discountPrice: discountPrice.categoryBookPhilosophyPrice,
            stars: false
        },
        {
            image: imageFirstSectionBooks15,
            imgP: '',
            classImgP: '',
            categoryBook: categoryBook.AutoHelp,
            describe: describe.categoryBookAutoHelpDescribe,
            price: '',
            discountPrice: discountPrice.categoryBookAutoHelpPrice,
            stars: false
        },
        {
            image: imageFirstSectionBooks16,
            imgP: imgP.TopRated,
            classImgP: classImgP.TopRated,
            categoryBook: categoryBook.Essay,
            describe: describe.categoryBookEssayDescribe,
            price: '',
            discountPrice: discountPrice.categoryBookEssayPrice,
            stars: false
        },
        {
            image: imageFirstSectionBooks17,
            imgP: imgP.Sale,
            classImgP: classImgP.Sale,
            categoryBook: categoryBook.Philosophy,
            describe: describe.categoryBookPhilosophyDescribe,
            price: '',
            discountPrice: discountPrice.categoryBookPhilosophyPrice,
            stars: false
        },
        {
            image: imageFirstSectionBooks18,
            imgP: '',
            classImgP: '',
            categoryBook: categoryBook.AutoHelp,
            describe: describe.categoryBookAutoHelpDescribe,
            price: '',
            discountPrice: discountPrice.categoryBookAutoHelpPrice,
            stars: false
        }
    ];
    const getStars = (count, countZeroStars) => {
        let stars = [];
        const starSvg = (<svg viewBox="64 64 896 896" focusable="false" data-icon="star" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg>);
        const difference = count - countZeroStars;
        for(let i = 0; i < count; i++){
            stars.push(
                (
                    <li key={i} className={"card-star" + (i >= difference ? " card-star-zero" : " card-star-full")} style={{marginRight: '8px'}}>
                        <div role="radio" aria-checked="true" aria-posinset={1} aria-setsize={5} tabIndex={-1} className="card-star-div">
                            <div className="card-star-first">
                                <span role="img" aria-label="star" className="card-star-span">{starSvg}</span>
                            </div>
                            <div className="card-star-second">
                                <span role="img" aria-label="star" className="card-star-span">{starSvg}</span>
                            </div>
                        </div>
                    </li>
                )
            );
        }
        return stars
    }
    const stars = getStars(5, 1);
    const slides = cards.map((card, index) => {
        return (
            <div key={index} className="card book-card">
                <Link to="/" className="mb-3">
                    <div className="card-img-div book-img-div">
                        <img className="card-img book-img" src={card.image} alt="book" />
                        <p className={"card-img-p book-img-p " + card.classImgP}>{card.imgP}</p>
                    </div>
                </Link>
                <p className="card-category book-category">{card.categoryBook}</p>
                <h3 className="card-describe book-describe">{card.describe}</h3>
                {card.stars ? (
                    <ul className="card-stars" tabIndex={-1} role="radiogroup">
                        {stars}
                    </ul>
                ) : null}
                <div className="card-prices book-prices">
                    <p className="card-price book-price">{card.price}</p>
                    <p className="card-discount-price book-discount-price">{card.discountPrice}</p>
                </div>
            </div>
        );
    });
    return slides;
}

export function NovelsSlider(){
    const categoryBook = {
        Essay: 'Essay',
        Philosophy: 'Philosophy',
        AutoHelp: 'Auto Help'
    }
    const imgP = {
        TopRated: 'Top Rated',
        Sale: 'Sale!',
    }
    const classImgP = {
        TopRated: 'img-p-tr',
        Sale: 'img-p-sl'
    }
    const describe = {
        categoryBookEssayDescribe: 'Discipline and Punish: The Birth of the Prison',
        categoryBookPhilosophyDescribe: 'The Agony of Eros',
        categoryBookAutoHelpDescribe: 'The Lords and The New Creatures'
    }
    const discountPrice = {
        categoryBookEssayPrice: 20,
        categoryBookPhilosophyPrice: 15,
        categoryBookAutoHelpPrice: 25
    }
    const cards = [
        {
            image: imageFirstSectionNovels1,
            imgP: imgP.TopRated,
            classImgP: classImgP.TopRated,
            categoryBook: categoryBook.Essay,
            describe: describe.categoryBookEssayDescribe,
            price: '$35',
            discountPrice: discountPrice.categoryBookEssayPrice,
            stars: false
        },
        {
            image: imageFirstSectionNovels2,
            imgP: imgP.Sale,
            classImgP: classImgP.Sale,
            categoryBook: categoryBook.Philosophy,
            describe: describe.categoryBookPhilosophyDescribe,
            price: '',
            discountPrice: discountPrice.categoryBookPhilosophyPrice,
            stars: true
        },
        {
            image: imageFirstSectionNovels3,
            imgP: '',
            classImgP: '',
            categoryBook: categoryBook.AutoHelp,
            describe: describe.categoryBookAutoHelpDescribe,
            price: '',
            discountPrice: discountPrice.categoryBookAutoHelpPrice,
            stars: false
        },
        {
            image: imageFirstSectionNovels4,
            imgP: imgP.TopRated,
            classImgP: classImgP.TopRated,
            categoryBook: categoryBook.Essay,
            describe: describe.categoryBookEssayDescribe,
            price: '',
            discountPrice: discountPrice.categoryBookEssayPrice,
            stars: false
        },
        {
            image: imageFirstSectionNovels5,
            imgP: imgP.Sale,
            classImgP: classImgP.Sale,
            categoryBook: categoryBook.Philosophy,
            describe: describe.categoryBookPhilosophyDescribe,
            price: '',
            discountPrice: discountPrice.categoryBookPhilosophyPrice,
            stars: false
        },
        {
            image: imageFirstSectionNovels6,
            imgP: '',
            classImgP: '',
            categoryBook: categoryBook.AutoHelp,
            describe: describe.categoryBookAutoHelpDescribe,
            price: '',
            discountPrice: discountPrice.categoryBookAutoHelpPrice,
            stars: false
        },
        {
            image: imageFirstSectionNovels7,
            imgP: imgP.TopRated,
            classImgP: classImgP.TopRated,
            categoryBook: categoryBook.Essay,
            describe: describe.categoryBookEssayDescribe,
            price: '',
            discountPrice: discountPrice.categoryBookEssayPrice,
            stars: false
        },
        {
            image: imageFirstSectionNovels8,
            imgP: imgP.Sale,
            classImgP: classImgP.Sale,
            categoryBook: categoryBook.Philosophy,
            describe: describe.categoryBookPhilosophyDescribe,
            price: '',
            discountPrice: discountPrice.categoryBookPhilosophyPrice,
            stars: false
        },
        {
            image: imageFirstSectionNovels9,
            imgP: '',
            classImgP: '',
            categoryBook: categoryBook.AutoHelp,
            describe: describe.categoryBookAutoHelpDescribe,
            price: '',
            discountPrice: discountPrice.categoryBookAutoHelpPrice,
            stars: false
        },
        {
            image: imageFirstSectionNovels10,
            imgP: imgP.TopRated,
            classImgP: classImgP.TopRated,
            categoryBook: categoryBook.Essay,
            describe: describe.categoryBookEssayDescribe,
            price: '$35',
            discountPrice: discountPrice.categoryBookEssayPrice,
            stars: false
        },
        {
            image: imageFirstSectionNovels11,
            imgP: imgP.Sale,
            classImgP: classImgP.Sale,
            categoryBook: categoryBook.Philosophy,
            describe: describe.categoryBookPhilosophyDescribe,
            price: '',
            discountPrice: discountPrice.categoryBookPhilosophyPrice,
            stars: false
        },
        {
            image: imageFirstSectionNovels12,
            imgP: '',
            classImgP: '',
            categoryBook: categoryBook.AutoHelp,
            describe: describe.categoryBookAutoHelpDescribe,
            price: '',
            discountPrice: discountPrice.categoryBookAutoHelpPrice,
            stars: false
        },
        {
            image: imageFirstSectionNovels13,
            imgP: imgP.TopRated,
            classImgP: classImgP.TopRated,
            categoryBook: categoryBook.Essay,
            describe: describe.categoryBookEssayDescribe,
            price: '',
            discountPrice: discountPrice.categoryBookEssayPrice,
            stars: false
        },
        {
            image: imageFirstSectionNovels14,
            imgP: imgP.Sale,
            classImgP: classImgP.Sale,
            categoryBook: categoryBook.Philosophy,
            describe: describe.categoryBookPhilosophyDescribe,
            price: '',
            discountPrice: discountPrice.categoryBookPhilosophyPrice,
            stars: false
        },
        {
            image: imageFirstSectionNovels15,
            imgP: '',
            classImgP: '',
            categoryBook: categoryBook.AutoHelp,
            describe: describe.categoryBookAutoHelpDescribe,
            price: '',
            discountPrice: discountPrice.categoryBookAutoHelpPrice,
            stars: false
        },
        {
            image: imageFirstSectionNovels16,
            imgP: imgP.TopRated,
            classImgP: classImgP.TopRated,
            categoryBook: categoryBook.Essay,
            describe: describe.categoryBookEssayDescribe,
            price: '',
            discountPrice: discountPrice.categoryBookEssayPrice,
            stars: false
        },
        {
            image: imageFirstSectionNovels17,
            imgP: imgP.Sale,
            classImgP: classImgP.Sale,
            categoryBook: categoryBook.Philosophy,
            describe: describe.categoryBookPhilosophyDescribe,
            price: '',
            discountPrice: discountPrice.categoryBookPhilosophyPrice,
            stars: false
        },
        {
            image: imageFirstSectionNovels18,
            imgP: '',
            classImgP: '',
            categoryBook: categoryBook.AutoHelp,
            describe: describe.categoryBookAutoHelpDescribe,
            price: '',
            discountPrice: discountPrice.categoryBookAutoHelpPrice,
            stars: false
        }
    ];
    const getStars = (count, countZeroStars) => {
        let stars = [];
        const starSvg = (<svg viewBox="64 64 896 896" focusable="false" data-icon="star" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg>);
        const difference = count - countZeroStars;
        for(let i = 0; i < count; i++){
            stars.push(
                (
                    <li key={i} className={"card-star" + (i >= difference ? " card-star-zero" : " card-star-full")} style={{marginRight: '8px'}}>
                        <div role="radio" aria-checked="true" aria-posinset={1} aria-setsize={5} tabIndex={-1} className="card-star-div">
                            <div className="card-star-first">
                                <span role="img" aria-label="star" className="card-star-span">{starSvg}</span>
                            </div>
                            <div className="card-star-second">
                                <span role="img" aria-label="star" className="card-star-span">{starSvg}</span>
                            </div>
                        </div>
                    </li>
                )
            );
        }
        return stars
    }
    const stars = getStars(5, 1);
    const slides = cards.map((card, index) => {
        return (
            <div key={index} className="card novel-card">
                <Link to="/" className="mb-3">
                    <div className="card-img-div novel-img-div">
                        <img className="card-img novel-img" src={card.image} alt="novel" />
                        <p className={"card-img-p novel-img-p " + card.classImgP}>{card.imgP}</p>
                    </div>
                </Link>
                <p className="card-category novel-category">{card.categoryBook}</p>
                <h3 className="card-describe novel-describe">{card.describe}</h3>
                {card.stars ? (
                    <ul className="card-stars" tabIndex={-1} role="radiogroup">
                        {stars}
                    </ul>
                ) : null}
                <div className="card-prices novel-prices">
                    <p className="card-price novel-price">{card.price}</p>
                    <p className="card-discount-price novel-discount-price">{card.discountPrice}</p>
                </div>
            </div>
        );
    });
    return slides;
}

export function CategoriesSlider(){
    const categories = {
        Sociology: 'Sociology',
        Psyhology: 'Psyhology',
        Poetry: 'Poetry',
        Philosophy: 'Philosophy'
    }
    const cards = [
        {
            image: imageFirstSectionCategories1,
            category: categories.Sociology
        },
        {
            image: imageFirstSectionCategories2,
            category: categories.Psyhology
        },
        {
            image: imageFirstSectionCategories3,
            category: categories.Poetry
        },
        {
            image: imageFirstSectionCategories4,
            category: categories.Philosophy
        },
        {
            image: imageFirstSectionCategories5,
            category: categories.Sociology
        },
        {
            image: imageFirstSectionCategories6,
            category: categories.Psyhology
        },
        {
            image: imageFirstSectionCategories7,
            category: categories.Poetry
        },
        {
            image: imageFirstSectionCategories8,
            category: categories.Philosophy
        },
        {
            image: imageFirstSectionCategories9,
            category: categories.Sociology
        },
        {
            image: imageFirstSectionCategories10,
            category: categories.Psyhology
        },
        {
            image: imageFirstSectionCategories11,
            category: categories.Poetry
        },
        {
            image: imageFirstSectionCategories12,
            category: categories.Philosophy
        }
        
    ];
    const slides = cards.map((card, index) => {
        return (
            <div key={index} className="category-card">
                <div className="category-card-img-div">
                    <Link to="/">
                        <img className="category-card-img" src={card.image} alt="category" />
                    </Link>
                </div>
                <h3 className="h3 category-card-h3">{card.category}</h3>
            </div>
        );
    });
    return slides;
}

export function BestBooksSlider(){
    const categoryBook = {
        Essay: 'Essay',
        Philosophy: 'Philosophy',
        AutoHelp: 'Auto Help'
    }
    const imgP = {
        TopRated: 'Top Rated',
        Sale: 'Sale!',
    }
    const classImgP = {
        TopRated: 'img-p-tr',
        Sale: 'img-p-sl'
    }
    const describe = {
        categoryBookEssayDescribe: 'Discipline and Punish: The Birth of the Prison',
        categoryBookPhilosophyDescribe: 'The Agony of Eros',
        categoryBookAutoHelpDescribe: 'The Lords and The New Creatures'
    }
    const discountPrice = {
        categoryBookEssayPrice: 20,
        categoryBookPhilosophyPrice: 15,
        categoryBookAutoHelpPrice: 25
    }
    const cards = [
        {
            image: imageSecondSectionBestBooks1,
            imgP: imgP.TopRated,
            classImgP: classImgP.TopRated,
            categoryBook: categoryBook.Essay,
            describe: describe.categoryBookEssayDescribe,
            price: '$35',
            discountPrice: discountPrice.categoryBookEssayPrice,
            stars: false
        },
        {
            image: imageSecondSectionBestBooks2,
            imgP: imgP.Sale,
            classImgP: classImgP.Sale,
            categoryBook: categoryBook.Philosophy,
            describe: describe.categoryBookPhilosophyDescribe,
            price: '',
            discountPrice: discountPrice.categoryBookPhilosophyPrice,
            stars: true
        },
        {
            image: imageSecondSectionBestBooks3,
            imgP: '',
            classImgP: '',
            categoryBook: categoryBook.AutoHelp,
            describe: describe.categoryBookAutoHelpDescribe,
            price: '',
            discountPrice: discountPrice.categoryBookAutoHelpPrice,
            stars: false
        },
        {
            image: imageSecondSectionBestBooks1,
            imgP: imgP.TopRated,
            classImgP: classImgP.TopRated,
            categoryBook: categoryBook.Essay,
            describe: describe.categoryBookEssayDescribe,
            price: '',
            discountPrice: discountPrice.categoryBookEssayPrice,
            stars: false
        },
        {
            image: imageSecondSectionBestBooks1,
            imgP: imgP.Sale,
            classImgP: classImgP.Sale,
            categoryBook: categoryBook.Philosophy,
            describe: describe.categoryBookPhilosophyDescribe,
            price: '',
            discountPrice: discountPrice.categoryBookPhilosophyPrice,
            stars: false
        },
        {
            image: imageSecondSectionBestBooks2,
            imgP: '',
            classImgP: '',
            categoryBook: categoryBook.AutoHelp,
            describe: describe.categoryBookAutoHelpDescribe,
            price: '',
            discountPrice: discountPrice.categoryBookAutoHelpPrice,
            stars: false
        },
        {
            image: imageSecondSectionBestBooks1,
            imgP: imgP.TopRated,
            classImgP: classImgP.TopRated,
            categoryBook: categoryBook.Essay,
            describe: describe.categoryBookEssayDescribe,
            price: '',
            discountPrice: discountPrice.categoryBookEssayPrice,
            stars: false
        },
        {
            image: imageSecondSectionBestBooks1,
            imgP: imgP.Sale,
            classImgP: classImgP.Sale,
            categoryBook: categoryBook.Philosophy,
            describe: describe.categoryBookPhilosophyDescribe,
            price: '',
            discountPrice: discountPrice.categoryBookPhilosophyPrice,
            stars: false
        },
        {
            image: imageSecondSectionBestBooks2,
            imgP: '',
            classImgP: '',
            categoryBook: categoryBook.AutoHelp,
            describe: describe.categoryBookAutoHelpDescribe,
            price: '',
            discountPrice: discountPrice.categoryBookAutoHelpPrice,
            stars: false
        },
        {
            image: imageSecondSectionBestBooks1,
            imgP: imgP.TopRated,
            classImgP: classImgP.TopRated,
            categoryBook: categoryBook.Essay,
            describe: describe.categoryBookEssayDescribe,
            price: '$35',
            discountPrice: discountPrice.categoryBookEssayPrice,
            stars: false
        },
        {
            image: imageSecondSectionBestBooks2,
            imgP: imgP.Sale,
            classImgP: classImgP.Sale,
            categoryBook: categoryBook.Philosophy,
            describe: describe.categoryBookPhilosophyDescribe,
            price: '',
            discountPrice: discountPrice.categoryBookPhilosophyPrice,
            stars: false
        },
        {
            image: imageSecondSectionBestBooks3,
            imgP: '',
            classImgP: '',
            categoryBook: categoryBook.AutoHelp,
            describe: describe.categoryBookAutoHelpDescribe,
            price: '',
            discountPrice: discountPrice.categoryBookAutoHelpPrice,
            stars: false
        },
        {
            image: imageSecondSectionBestBooks1,
            imgP: imgP.TopRated,
            classImgP: classImgP.TopRated,
            categoryBook: categoryBook.Essay,
            describe: describe.categoryBookEssayDescribe,
            price: '',
            discountPrice: discountPrice.categoryBookEssayPrice,
            stars: false
        },
        {
            image: imageSecondSectionBestBooks1,
            imgP: imgP.Sale,
            classImgP: classImgP.Sale,
            categoryBook: categoryBook.Philosophy,
            describe: describe.categoryBookPhilosophyDescribe,
            price: '',
            discountPrice: discountPrice.categoryBookPhilosophyPrice,
            stars: false
        },
        {
            image: imageSecondSectionBestBooks2,
            imgP: '',
            classImgP: '',
            categoryBook: categoryBook.AutoHelp,
            describe: describe.categoryBookAutoHelpDescribe,
            price: '',
            discountPrice: discountPrice.categoryBookAutoHelpPrice,
            stars: false
        },
        {
            image: imageSecondSectionBestBooks1,
            imgP: imgP.TopRated,
            classImgP: classImgP.TopRated,
            categoryBook: categoryBook.Essay,
            describe: describe.categoryBookEssayDescribe,
            price: '',
            discountPrice: discountPrice.categoryBookEssayPrice,
            stars: false
        },
        {
            image: imageSecondSectionBestBooks1,
            imgP: imgP.Sale,
            classImgP: classImgP.Sale,
            categoryBook: categoryBook.Philosophy,
            describe: describe.categoryBookPhilosophyDescribe,
            price: '',
            discountPrice: discountPrice.categoryBookPhilosophyPrice,
            stars: false
        },
        {
            image: imageSecondSectionBestBooks2,
            imgP: '',
            classImgP: '',
            categoryBook: categoryBook.AutoHelp,
            describe: describe.categoryBookAutoHelpDescribe,
            price: '',
            discountPrice: discountPrice.categoryBookAutoHelpPrice,
            stars: false
        }
    ];
    const getStars = (count, countZeroStars) => {
        let stars = [];
        const starSvg = (<svg viewBox="64 64 896 896" focusable="false" data-icon="star" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg>);
        const difference = count - countZeroStars;
        for(let i = 0; i < count; i++){
            stars.push(
                (
                    <li key={i} className={"card-star" + (i >= difference ? " card-star-zero" : " card-star-full")} style={{marginRight: '8px'}}>
                        <div role="radio" aria-checked="true" aria-posinset={1} aria-setsize={5} tabIndex={-1} className="card-star-div">
                            <div className="card-star-first">
                                <span role="img" aria-label="star" className="card-star-span">{starSvg}</span>
                            </div>
                            <div className="card-star-second">
                                <span role="img" aria-label="star" className="card-star-span">{starSvg}</span>
                            </div>
                        </div>
                    </li>
                )
            );
        }
        return stars
    }
    const stars = getStars(5, 1);
    const slides = cards.map((card, index) => {
        return (
            <div key={index} className="card best-book-card">
                <Link to="/" className="mb-3">
                    <div className="card-img-div best-book-img-div">
                        <img className="card-img best-book-img" src={card.image} alt="best-book" />
                        <p className={"card-img-p best-book-img-p " + card.classImgP}>{card.imgP}</p>
                    </div>
                </Link>
                <p className="card-category best-book-category">{card.categoryBook}</p>
                <h3 className="card-describe best-book-describe">{card.describe}</h3>
                {card.stars ? (
                    <ul className="card-stars" tabIndex={-1} role="radiogroup">
                        {stars}
                    </ul>
                ) : null}
                <div className="card-prices best-book-prices">
                    <p className="card-price best-book-price">{card.price}</p>
                    <p className="card-discount-price best-book-discount-price">{card.discountPrice}</p>
                </div>
                <button className="card-add-btn">Додати до корзини</button>
            </div>
        );
    });
    return slides;
}


export function BlogSlider(){
    const date = {
        date1: "16 April 2020",
        date2: "January 4, 2021"
    }
    const header = {
        header1: "No one is a monster 24 hours a day, not even Harvey Weinstein",
        header2: "“The ickabog”, the return of J.K. Rowling to children’s literature after Harry Potter"
    }
    const text = {
        text1: "One bring to very us our. Darkness made i waters.",
        text2: "Waters divided. Us. Given sixth, place. Of you'll blessed from sixth likeness stars. He cattle you're The lesser beginning male i divided brought above. Isn't. Beast without fourth."
    }
    const cards = [
        {
            image: imageBlog1,
            date: date.date1,
            header: header.header1,
            text: text.text1
        },
        {
            image: imageBlog2,
            date: date.date2,
            header: header.header2,
            text: text.text2
        },
        {
            image: imageBlog1,
            date: date.date1,
            header: header.header1,
            text: text.text1
        },
        {
            image: imageBlog2,
            date: date.date2,
            header: header.header2,
            text: text.text2
        },
        {
            image: imageBlog1,
            date: date.date1,
            header: header.header1,
            text: text.text1
        },
        {
            image: imageBlog2,
            date: date.date2,
            header: header.header2,
            text: text.text2
        },
        {
            image: imageBlog1,
            date: date.date1,
            header: header.header1,
            text: text.text1
        },
        {
            image: imageBlog2,
            date: date.date2,
            header: header.header2,
            text: text.text2
        }
        
    ];
    const slides = cards.map((card, index) => {
        return (
            <Link key={index} to="/">
                <div className="blog-card">
                    <div className="blog-card-body">
                        <div className="blog-card-img-div">
                            <img className="blog-card-img" src={card.image} alt="Title Image" />
                        </div>
                        <p className="blog-card-date">{card.date}</p>
                        <h3 className="blog-card-header">{card.header}</h3>
                        <p className="blog-card-text">{card.text}</p>
                    </div>
                </div>
            </Link>
        );
    });
    return slides;
}
