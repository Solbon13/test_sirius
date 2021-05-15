export interface GamesState {
    wordsCount: number,
    lettersCount: number,
    distance: number,
    distanceInc: number,
    speed: number,
    wordsArray: []
}

export enum GamesActionTypes {
    SET_WORDS_COUNT = 'SET_WORDS_COUNT',
    SET_LETTERS_COUNT = 'SET_LETTERS_COUNT',
    SET_DISTANCE = 'SET_DISTANCE',
    SET_DISTANCE_INC = 'SET_DISTANCE_INC',
    SET_SPEED = 'SET_SPEED'
}

interface WordsCountAction {
    type: GamesActionTypes.SET_WORDS_COUNT,
    payload: number
}

interface LettersCountAction {
    type: GamesActionTypes.SET_LETTERS_COUNT,
    payload: number
}

interface DistanceAction {
    type: GamesActionTypes.SET_DISTANCE,
    payload: number
}

interface DistanceIncAction {
    type: GamesActionTypes.SET_DISTANCE_INC,
    payload: number
}

interface SpeedAction {
    type: GamesActionTypes.SET_SPEED,
    payload: number
}

export type GamesAction =
    WordsCountAction
    | LettersCountAction
    | DistanceAction
    | DistanceIncAction
    | SpeedAction