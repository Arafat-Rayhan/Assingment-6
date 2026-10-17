import Counterbord from '@/component/ui/Counterbord';
import ListBord from '@/component/ui/ListBord'
import SortMenu from '@/component/ui/SortMenu';


const page = () => {
    return (
        <div>
            <Counterbord />
            <SortMenu />
            <ListBord />
        </div>
    );
};

export default page;