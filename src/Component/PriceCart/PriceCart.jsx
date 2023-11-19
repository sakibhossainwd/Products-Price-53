// eslint-disable-next-line no-unused-vars
import React from 'react';

const PriceCart = ({price}) => {
    console.log(price)
    return (
        <div>
            <h2>
                <samp className='text-3xl font-bold text-purple-700'>{price.price}</samp>
                <samp>/Mounth</samp>
            </h2>
        </div>
    );
};

export default PriceCart;