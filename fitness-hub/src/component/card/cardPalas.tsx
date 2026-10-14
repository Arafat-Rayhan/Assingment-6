import {getDataALL} from '@/component/cardData/cData'
import {PlainData} from '@/type/type'
import Card from '@/component/card/card'

const CardPlace =async () => {
     const cards:PlainData[]= await getDataALL();
   return(
        <div className='flexl'>
             {cards.map((card)=> (<Card key={card.id} card={card} />))}
        </div>
   )

}

export default CardPlace;










  