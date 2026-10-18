import {getDataALL} from '@/component/cardData/cData'
import {PlainData} from '@/type/type'
import Card from '@/component/card/card'

const CardPlace =async () => {
     const cards:PlainData[]= await getDataALL();
   return(
     <div className='text-center'>
          <h1 className='font-bold text-[30px]'>THE LIBRARY</h1>
          <p className='font-normal text-[14px] text-[#9CA3AF]'>Twelve lifts covering every major muscle group.</p>
        <div className='flex grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-[15px] max-w-[1280px] m-auto  pt-[30px] '>
             {cards.map((card)=> (<Card key={card.id} card={card} />))}
        </div>
     </div>
   )

}

export default CardPlace;










  