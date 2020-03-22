import React,{ useState } from 'react';
import Image from '../Image';

const Banner = ({games}) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const max = games.length;
    
    const list = games.map(({id, name, released, background_image, rating}) => (
        <div key={id} className="w-full h-full relative">
            <Image src={background_image} className="object-cover h-full w-full"/>
            <div className="absolute left-0 bottom-0 flex flex-col bg-white">
                <h2>{name}</h2>
                <span>{released}</span>
                <span>{rating}</span>
            </div>
        </div>
    ))

    return (
        <div className="w-full h-64 relative">
            {list[currentIndex]}
            <div className="absolute left-0" onClick={()=> setCurrentIndex((currentIndex+1)%max)}>Haha</div>
            <div className="absolute right-0" onClick={()=> setCurrentIndex((currentIndex+max-1) % max)}>Haha</div>
        </div>
    )
}

export default Banner;