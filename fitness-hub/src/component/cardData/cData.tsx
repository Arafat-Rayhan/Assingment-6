"use cache"

import { PlainData } from '@/type/type';


export const getDataALL =  async() => {

    try{
        const res=await fetch('https://api.abcz.workers.dev/api/fitlog');
        return  res.json();
    }catch(error){
        console.log(error)
        return[]
    }
     
};


export const getDataId = async ({ id }: { id: string }): Promise<PlainData | null> => {
    const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);

    if (res.status === 404) {
        return null;
    }

    if (!res.ok) {
        throw new Error(`Failed to fetch workout ${id}: ${res.status} ${res.statusText}`);
    }

    return res.json();
};