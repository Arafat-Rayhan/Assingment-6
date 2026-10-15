import {getDataALL} from '@/component/cardData/cData'
import {PlainData} from '@/type/type'
import Card from '@/component/card/card'

const CardPlace =async () => {
     const cards:PlainData[]= await getDataALL();
   return(
        <div className='flex grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-[15px] max-w-[1280px] m-auto p-auto '>
             {cards.map((card)=> (<Card key={card.id} card={card} />))}
        </div>
   )

}

export default CardPlace;










  