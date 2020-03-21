import { all } from 'redux-saga/effects';
import bestGamesSaga from './bestgames/saga';

function* saga(){
    yield all([
        bestGamesSaga(),
    ])
}

export default saga;