import {
    FETCH_GAMES,
    FETCHING_BEST_GAMES,
    FETCHING_BEST_GAMES_SUCCESS,
    FETCHING_BEST_GAMES_FAIL,
} from './types';
import { put, call, takeEvery } from 'redux-saga/effects'

import { getBestGames } from '../../api/games'

function* fetchBestGames() {
    yield put({type:FETCHING_BEST_GAMES});
    try{
        const { results } = yield call(getBestGames);
        yield put({
            type:FETCHING_BEST_GAMES_SUCCESS,
            payload:results
        });
    }catch(err){
        yield put({type:FETCHING_BEST_GAMES_FAIL});
    }
}

function* watchBestGames(){
    yield takeEvery(FETCH_GAMES, fetchBestGames);
}

export default watchBestGames;