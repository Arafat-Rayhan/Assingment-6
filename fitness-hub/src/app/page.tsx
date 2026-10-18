import CardPlace from '@/component/card/cardPalas'
import Benner from '@/component/layout/Benner'
import Footer from '@/component/layout/Footer'
 const Home = () => {
  return (
    <div className='grit grit-cols-1 items-center gap-[300px]'>
      <Benner />
      <CardPlace />
      <Footer />
    </div>
  );
 };
 
 export default Home;