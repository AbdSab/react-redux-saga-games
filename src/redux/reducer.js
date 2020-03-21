import bestGames from './bestgames/reducer';
import { combineReducers } from 'redux';

console.log(bestGames);
const reducer = combineReducers({
    bestGames,
});

export default reducer;