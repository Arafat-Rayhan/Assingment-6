import React from 'react';
import Image from 'next/image'

const Loading = () => {
    return (
        <div>
            wait.......
            <Image 
            src="/download.gif"
            width={100}
            height={100}
            alt='loding'></Image>
        </div>
    );
};

export default Loading;