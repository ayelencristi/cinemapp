import { FC } from 'react';
import './styless.css'

type Props = {
    stars: number
}

const Rating: FC<Props> = ({ stars }) => {

    const maxStars = 5;
    const Percentage = ((stars / 2.09) / maxStars) * 100;
    const PercentageRounded = Math.round(Percentage);

    const Stars = () => {
        return {
            width: PercentageRounded + "px"
        };
    };


    return (
        <div className="stars-empty">
            <div className="stars-yellow" style={Stars()}></div>
        </div>
    );
}


export { Rating }