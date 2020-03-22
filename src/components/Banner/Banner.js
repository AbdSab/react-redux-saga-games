import React,{ useState } from 'react';
import classnames from 'classnames';
import Image from '../Image';

const Banner = ({games}) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [x,setX] = useState(0);
    const max = games.length;
    
    const list = games.map(({id, name, released, background_image, rating}) => (
        <div key={id} className="w-full h-full relative transition ease-in duration-200" style={{transform:`translateX(${x})`}}>
            <Image src={background_image} className="object-cover h-full w-full"/>
            <div className="absolute left-0 bottom-0 flex flex-col text-white bg-black opacity-75 w-full p-2">
                <h2 className="text-3xl">{name}</h2>
                <span className="text-sm">{released}</span>
            </div>
        </div>
    ))

    const buttons = [...Array(max).keys()].map(key => 
        <span 
            key={key} 
            className={classnames("mx-1 w-4 h-4 rounded-full transition ease-in duration-200 cursor-pointer", currentIndex === key ? 'bg-white' : 'border-2 border-white')}
            onClick={() => setCurrentIndex(key)}
        />
    )

    return (
        <div className="w-full h-64 relative">
            {list[currentIndex]}
            <div className="absolute top-0 left-0 flex justify-between items-center w-full h-full">
                <div className="" onClick={()=> setCurrentIndex((currentIndex+1)%max)}>Haha</div>
                <div className="" onClick={()=> setCurrentIndex((currentIndex+max-1) % max)}>Haha</div>
            </div>
            <div className="w-full absolute bottom-0 left-0 flex justify-center mb-4">
                {buttons}
            </div>
        </div>
    )
}

export default Banner;