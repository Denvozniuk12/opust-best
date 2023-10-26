import React from "react";
import { Link } from 'react-router-dom';
import { imageFirstSectionCategories1, imageFirstSectionCategories2, imageFirstSectionCategories3, imageFirstSectionCategories4,
    imageFirstSectionCategories5, imageFirstSectionCategories6, imageFirstSectionCategories7, imageFirstSectionCategories8, 
    imageFirstSectionCategories9, imageFirstSectionCategories10, imageFirstSectionCategories11, imageFirstSectionCategories12 
} from '../../../Img/FirstSection/Categories';


function CategoriesSlider(){
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

export default CategoriesSlider;