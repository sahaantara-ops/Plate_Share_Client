
import { useLoaderData } from 'react-router-dom';
import AvailableFoodCard from '../AvailableFoodCard/AvailableFoodCard';
import Header from '../Header/Header';

const AvailableFoods = () => {
    
    
     const data = useLoaderData();
  const models = data?.result || data || []; // safe fallback

  console.log("models:", models);
    return (
        <div>
            <section>
                <Header></Header>
            </section>
            <h2 className='text-2xl font-black font-bold text-pink-400 ml-160'>Total Foods: {models.length}</h2> 
             
                   <div className="grid grid-cols-3 gap-6 mt-10 ml-60 mb-20">
                    {models.map(models => (
                      <AvailableFoodCard key={models._id} models={models} />
                    ))}
                  </div>
        </div>
    );
};

export default AvailableFoods;