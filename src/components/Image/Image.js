import React, { useState } from 'react';
import classnames from 'classnames'
import { useInView } from 'react-hook-inview';
import Loader from 'react-spinners/ClipLoader';

const Image = ({src, className, ...props}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [ref, isVisible] = useInView({threshold:1});

    const placeholder = isLoading && (
        <div className={classnames(className, 'bg-black opacity-75 flex')} {...props}>
            <div className="flex items-center justify-center w-full">
                <Loader color="white"/>
            </div>
        </div>
    );

    return (
        <div ref={ref} className="h-full w-full">
            {isVisible
            ? (
                <>
                    {placeholder}
                    <img src={src} onLoad={()=> setIsLoading(false)} className={classnames(className, isLoading ? 'hidden' : '')} {...props}/>
                </>
            ) : null}
        </div>
    )
}

export default Image;