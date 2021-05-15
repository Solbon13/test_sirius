import { GamesAction, GamesActionTypes, GamesState } from "../../types/games"

const initialState: GamesState = {
    wordsCount: 7,
    lettersCount: 9,
    distance: 25,
    distanceInc: 25,
    speed: 1,
    wordsArray: [
        'Человек','год','время','дело','жизнь','день','рука','раз','работа','слово','место','лицо','друг','глаз','вопрос','дом','сторона','страна',
        'мир','случай','голова','ребенок','сила','конец','вид','система','часть','город','отношение','женщина','деньги','земля','машина','вода',
        'отец','проблема','час','право','нога','решение','дверь','образ','история','власть','закон','война','бог','голос','тысяча','книга',
        'возможность','результат','ночь','стол','имя','область','статья','число','компания','народ','жена','группа','развитие','процесс','суд',
        'условие','средство','начало','свет','пора','путь','душа','уровень','форма','связь','минута','улица','вечер','качество','мысль','дорога',
        'мать','действие','месяц','государство','язык','любовь','взгляд','мама','век','школа','цель','общество','деятельнось','организация',
        'президент','комната'
      ]  
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
