import React from 'react';
import { useLoaderData } from "react-router-dom";
import { ModelCard } from '../../Components/`ModelCard/ModelCard';


const Foods = () => {
     

    const data = useLoaderData ();
    console.log(data);
    return (
        <div >
            <h2 className='text-2xl font-bold from-neutral-500 ml-170'>All Foods</h2>
            <p className='text-1xl font-light from-neutral-600 ml-150'>Explore our delicious food options</p>
            <div className='grid grid-cols-3 gap-6 mt-10 ml-60 mb-20'>
                {data.map(model => <ModelCard key = {model._id} model={model}></ModelCard>)}
            </div> 
                        
                
        
        </div>
    );
};

export default Foods;