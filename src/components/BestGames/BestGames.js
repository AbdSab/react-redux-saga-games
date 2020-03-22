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
    
    return (
        status === 'fetching' ? 
            <div>Loading</div>
            :<Banner games={topThreeGames}/>
    )
}

export default BestGames;