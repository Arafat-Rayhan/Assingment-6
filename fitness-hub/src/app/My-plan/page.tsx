
import ListBord from '@/component/ui/ListBord'


const page = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-5'>
            <h1  className='font-bold text-[36px]'>MY PLAN</h1>
            <p className='font-normal text-[14px] text-[#8A92A0]'>Cap of five lifts for today. Finish them, then load more.</p>
            <ListBord />
        </div>
    );
};

export default page;