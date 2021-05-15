import { GamesAction, GamesActionTypes } from "../../types/games";

export const setWordsCount = (payload: number): GamesAction => {
    return {type: GamesActionTypes.SET_WORDS_COUNT, payload}
}

export const setLettersCount = (payload: number): GamesAction => {
    return {type: GamesActionTypes.SET_LETTERS_COUNT, payload}
}

export const setDistanceCount = (payload: number): GamesAction => {
    return {type: GamesActionTypes.SET_DISTANCE, payload}
}

export const setDistanceIncCount = (payload: number): GamesAction => {
    return {type: GamesActionTypes.SET_DISTANCE_INC, payload}
}

export const setSpeed = (payload: number): GamesAction => {
    return {type: GamesActionTypes.SET_SPEED, payload}
}

