// eslint-disable-next-line no-unused-vars
import React from 'react';

const Link = ({route}) => {
    return (
        <li className='mr-12 font-semibold hover:text-purple-800'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;