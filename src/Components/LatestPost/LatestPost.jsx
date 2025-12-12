import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestPost = () => {
    return (
        <div className='flex gap-5 bg-orange-100 px-3 py-2'>
            <p className='text-base-100 bg-amber-400 px-2 '>Latest </p>
            <Marquee className='flex gap-5'>
                <p>
                  Ohh! padding of cheez-burger is so fresh even after few hours
               </p>
            </Marquee>
            
        </div>
    );
};

export default LatestPost;