import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Banner from '../Banner';
import { getBestGames } from '../../redux/bestgames/actions';

const BestGames = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        getBestGames()(dispatch);
    },[])

    return (
        <Banner />
    )
}

export default BestGames;