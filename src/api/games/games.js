import request from '../../utils/request';

const GAMES_LISTS_BASE = '/games/lists'

const BEST_GAMES = `${GAMES_LISTS_BASE}/greatest`
const RECENT_GAMES = `${GAMES_LISTS_BASE}/recent-games-past`;


export const getBestGames = async () => {
    const { data } = await request.get(BEST_GAMES);
    return data;
}

export const getRecentGames = async () => {
    const { data } = await request.get(RECENT_GAMES);
    return data;
}