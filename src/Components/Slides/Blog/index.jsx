import React from "react";
import { Link } from 'react-router-dom';
import { imageBlog1, imageBlog2 } from '../../../Img/Blog';


function BlogSlider(){
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
                            <img className="blog-card-img" src={card.image} alt="Title" />
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

export default BlogSlider;