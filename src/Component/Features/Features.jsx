// eslint-disable-next-line no-unused-vars
import React from 'react';
import { ShieldCheckIcon } from "@heroicons/react/24/solid";

const Features = ({feature}) => {
    return (
        <div className='flex items-center'>
            <ShieldCheckIcon className="h-6 w-6 text-purple-700" />
            <samp className='pl-2'>{feature}</samp>
        </div>
    );
};

export default Features;