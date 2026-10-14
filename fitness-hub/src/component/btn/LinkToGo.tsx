"use client"
import { PlainData } from '@/type/type';
import DetailCard from '../card/DetailCard';
import Link from 'next/link'

const LinkToGo = ({card,children}:{card:PlainData;children?:React.ReactNode}) => {

     const detailData=()=> <DetailCard key={card.id} card={card}/>

    return (
        
    <Link href={`/${card.id}`}
        onClick={()=>detailData()}
        >{children}</Link>
    
    );
};

export default LinkToGo;