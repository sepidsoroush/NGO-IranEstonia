import React from 'react';
import {Helmet} from 'react-helmet-async';

const News = () => { 
    return (
        <div className='w-screen mt-28 pb-20 flex flex-col'>
            <Helmet>
                <title>Activities - ISO</title>
                <meta name='description' content='Activities of ISO organization'/>
            </Helmet>
        </div>
    );
};

export default News;