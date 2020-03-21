import {
    FETCH_GAMES
} from './types';

export const getBestGames = () => dispatch => dispatch({type:FETCH_GAMES});