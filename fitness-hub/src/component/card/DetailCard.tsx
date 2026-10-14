import Image from 'next/image'
import {PlainData} from '@/type/type'


const DetailCard = ({card}:{card:PlainData}) => {
    return (
        <div>
            <Image
            src={card.image} 
            width={400}
            height={400}
            alt={card.name}
            >

            </Image>

            <div>
                <h2>
                    {card.name}

                </h2>
                <p>
                    {card.description}
                </p>
                <h2>
                    {card.difficulty}
                </h2>
                <h2>
                    {card.equipment}
                </h2>
            </div>
        </div>
    );
};

export default DetailCard;