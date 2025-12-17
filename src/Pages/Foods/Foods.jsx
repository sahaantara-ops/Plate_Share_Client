import React from 'react';
import { useLoaderData } from "react-router-dom";

const Foods = () => {
    const data = useLoaderData ();
    console.log(data);
    return (
        <div >
            <h2 className='text-2xl font-bold from-neutral-500 ml-170'>All Foods</h2>
            <p className='text-1xl font-light from-neutral-600 ml-150'>Explore our delicious food options</p>
        </div>
    );
};

export default Foods;