import { Rating } from 'react-simple-star-rating'

const StarRating = (ratingValue: any): JSX.Element => {
    const { rating } = ratingValue;

    return (
        <Rating ratingValue={rating * 10}
            size={25}
            readonly
            fillColor='yellow'
            emptyColor='gray' />
    );
}


export { StarRating }