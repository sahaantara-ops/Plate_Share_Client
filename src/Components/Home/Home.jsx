import React from 'react';
import Banner from '../Banner/Banner';
import { useLoaderData } from "react-router-dom";
import { ModelCard } from '../`ModelCard/ModelCard';


const Home = () => {
    const data = useLoaderData() || [];
    console.log(data);
    return (
        <div>
            <Banner></Banner>

            <div className='text-center text-xl font-bold '>Latest Food</div>
           
                <div className="grid grid-cols-3 gap-6 mt-10 ml-60 mb-20">
        {data.map(model => (
          <ModelCard key={model._id} model={model} />
        ))}
      </div>
           
        </div>
    );
};

export default Home;