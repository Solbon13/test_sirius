import { GamesAction, GamesActionTypes } from "../../types/games";

export const wordsCount = (payload: number): GamesAction => {
    return {type: GamesActionTypes.SET_WORDS_COUNT, payload}
}

export const lettersCount = (payload: number): GamesAction => {
    return {type: GamesActionTypes.SET_LETTERS_COUNT, payload}
}

export const distanceCount = (payload: number): GamesAction => {
    return {type: GamesActionTypes.SET_DISTANCE, payload}
}

export const distanceIncCount = (payload: number): GamesAction => {
    return {type: GamesActionTypes.SET_DISTANCE_INC, payload}
}

export const speedCount = (payload: number): GamesAction => {
    return {type: GamesActionTypes.SET_SPEED, payload}
}

