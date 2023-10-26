import { Link } from 'react-router-dom';
import { ISlideImage } from '../../../types/data';
import { imageFirstSectionAuthors1, imageFirstSectionAuthors2, imageFirstSectionAuthors3 } from '../../../Img/FirstSection/Authors';

interface ICard extends ISlideImage {
    authorName: string;
}

function AuthorsSlides() {
    const images: string[] = [
        imageFirstSectionAuthors1,
        imageFirstSectionAuthors2,
        imageFirstSectionAuthors3,
        imageFirstSectionAuthors1,
        imageFirstSectionAuthors2,
        imageFirstSectionAuthors3
    ];

    const authorsName: string[] = ['Emma Cline', 'Stephen King', 'Jim Morrison', 'Emma Cline', 'Stephen King', 'Jim Morrison'];

    const cards: ICard[] = images.map((image, index) => ({
        image: image,
        authorName: authorsName[index]
    }));

    const slides = cards.map((card, index) => (
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
    ));

    return slides;
}

export default AuthorsSlides;
