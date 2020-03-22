import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Banner from '../Banner';
import { getBestGames } from '../../redux/bestgames/actions';
import Image from '../Image';

const BestGames = () => {
    const dispatch = useDispatch();
    const {status, games} = useSelector(state => state.bestGames);

    useEffect(()=>{
        getBestGames()(dispatch);
    },[])
    
    const topThreeGames = games ? games.slice(0,3) : [];
    
    // return (
    //     status === 'fetching' ? 
    //         <div>Loading</div>
    //         :<Banner games={topThreeGames}/>
    // )

    return Array(20).fill().map(e => <><Image className="w-1/6 h-64" height="500" width="500" src={"https://via.placeholder.com/"+Math.floor(Math.random()*1000)} /><br/></>)
}

export default BestGames;