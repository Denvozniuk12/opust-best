import React from "react";
import { Link } from 'react-router-dom';
import { imageSecondSectionBestBooks1, imageSecondSectionBestBooks2, imageSecondSectionBestBooks3 } from '../../../Img/SecondSection/BestBooks';
import useStar from '../hooks/useStar';

function BestBooksSlider(){
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
    const { getStars } = useStar();
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

export default BestBooksSlider;