import React from "react";
import { Link } from 'react-router-dom';
import { imageFirstSectionBooks1, imageFirstSectionBooks2, imageFirstSectionBooks3, imageFirstSectionBooks4, imageFirstSectionBooks5, 
    imageFirstSectionBooks6, imageFirstSectionBooks7, imageFirstSectionBooks8, imageFirstSectionBooks9, imageFirstSectionBooks10,
    imageFirstSectionBooks11, imageFirstSectionBooks12, imageFirstSectionBooks13, imageFirstSectionBooks14, imageFirstSectionBooks15,
    imageFirstSectionBooks16, imageFirstSectionBooks17, imageFirstSectionBooks18 } from '../../../Img/FirstSection/Books';
import useStar from "../hooks/useStar";

function BooksSlider(){
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
    const { getStars } = useStar();
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

export default BooksSlider;