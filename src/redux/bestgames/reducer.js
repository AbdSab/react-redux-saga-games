import {
    FETCHING_BEST_GAMES,
    FETCHING_BEST_GAMES_SUCCESS,
    FETCHING_BEST_GAMES_FAIL
} from './types';

const initialState = {}

const reducer = (state = initialState, { type, payload }) => {
    switch(type){
        case FETCHING_BEST_GAMES:
            return {
                ...state,
                status:'fetching',
            }
        case FETCHING_BEST_GAMES_SUCCESS:
            return {
                ...state,
                games:payload,
                status: 'success',
            }
        case FETCHING_BEST_GAMES_FAIL:
            return {
                ...state,
                status:'fail',
            }
        default:
            return state;
    }
}

export default reducer;