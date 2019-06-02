import React from 'react'
import {Link } from 'react-router-dom'
import { defaultCoreCipherList } from 'constants';

export default() =>{
    return (
        <div>
            I am some other page
            <Link to="/">Go back home</Link>
        </div>
    );
};