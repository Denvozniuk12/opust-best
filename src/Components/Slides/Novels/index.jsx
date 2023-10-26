import React from "react";
import { Link } from 'react-router-dom';
import { imageFirstSectionNovels1, imageFirstSectionNovels2, imageFirstSectionNovels3, imageFirstSectionNovels4, imageFirstSectionNovels5,
    imageFirstSectionNovels6, imageFirstSectionNovels7, imageFirstSectionNovels8, imageFirstSectionNovels9, imageFirstSectionNovels10,
    imageFirstSectionNovels11, imageFirstSectionNovels12, imageFirstSectionNovels13, imageFirstSectionNovels14, imageFirstSectionNovels15,
    imageFirstSectionNovels16, imageFirstSectionNovels17, imageFirstSectionNovels18 } from '../../../Img/FirstSection/Novels';
import useStar from "../hooks/useStar";


function NovelsSlider(){
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
    const { getStars } = useStar();
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

export default NovelsSlider;