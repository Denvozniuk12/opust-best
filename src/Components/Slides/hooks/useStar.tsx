import { starIcon } from "../../../Img/Stars";

const useStar = () => {
    const getStars = (count: number, countZeroStars: number) => {
        let stars: JSX.Element[] = [];
        const difference: number = count - countZeroStars;
        for(let i: number = 0; i < count; i++){
            stars.push(
                (
                    <li key={i} className={"card-star" + (i >= difference ? " card-star-zero" : " card-star-full")} style={{marginRight: '8px'}}>
                        <div role="radio" aria-checked="true" aria-posinset={1} aria-setsize={5} tabIndex={-1} className="card-star-div">
                            <div className="card-star-first">
                                <span role="img" aria-label="star" className="card-star-span">{starIcon}</span>
                            </div>
                            <div className="card-star-second">
                                <span role="img" aria-label="star" className="card-star-span">{starIcon}</span>
                            </div>
                        </div>
                    </li>
                )
            );
        }
        return stars
    }

    return {
        getStars,
    };
}

export default useStar;