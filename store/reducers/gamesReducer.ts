import { GamesAction, GamesActionTypes, GamesState } from "../../types/games"

const initialState: GamesState = {
    wordsCount: 7,
    lettersCount: 9,
    distance: 25,
    distanceInc: 25,
    speed: 1,
    wordsArray: []
}

export const gamesReducer = (state = initialState, action: GamesAction): GamesState => {
    switch (action.type) {
        case GamesActionTypes.SET_WORDS_COUNT:
            return {...state, wordsCount: action.payload}
        case GamesActionTypes.SET_LETTERS_COUNT:
            return {...state, lettersCount: action.payload}
        case GamesActionTypes.SET_DISTANCE:
            return {...state, distance: action.payload}
        case GamesActionTypes.SET_DISTANCE_INC:
            return {...state, distanceInc: action.payload}
        case GamesActionTypes.SET_SPEED:
            return {...state, speed: action.payload}
        default:
            return state
    }
}
