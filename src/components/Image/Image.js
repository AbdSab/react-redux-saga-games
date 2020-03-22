import React, { useState } from 'react';
import classnames from 'classnames'
import { useInView } from 'react-hook-inview';
import Loader from 'react-spinners/ClipLoader';

const Image = ({src, className, ...props}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [ref, isVisible] = useInView({threshold:1});

    const placeholder = isLoading && (
        <div className={classnames(className, 'bg-gray-300 flex')} {...props}>
            <div className="flex items-center justify-center w-full">
                <Loader />
            </div>
        </div>
    );

    return (
        <div ref={ref}>
            {isVisible
            ? (
                <>
                    {placeholder}
                    <img src={src} onLoad={()=> setIsLoading(false)} className={className} {...props}/>
                </>
            ) : null}
        </div>
    )
}

export default Image;