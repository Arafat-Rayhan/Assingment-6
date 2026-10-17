import Image from 'next/image';
import { PlainData } from '@/type/type';

const LbordModel = ({card}:{card:PlainData}) => {
    return (
        <div>
            <div>
                {/*left */}
                <Image
                src={card.image}
                width={300}
                height={300}
                alt={card.name}
                >
                </Image>

                <div>
                    <h2>{card.name}</h2>
                    <h4>{card.equipment}</h4>
                    <div>
                        <span>{card.duration}</span>
                        <span>{card.caloriesBurned}</span>
                        <span>{card.duration}</span>
                    </div>
                </div>

            </div>
            <div>
                {/* right */}
            </div>
        </div>
    );
};

export default LbordModel;