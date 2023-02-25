import { ADD_MOVIES, ADD_FAVOURITE, REMOVE_FROM_FAVOURITES } from "../actions";


const initialMovieState = {
    list: [],
    favourites: []
}
export default function movies(state = initialMovieState , action) {
    switch (action.type) {

        case ADD_MOVIES:
            return {
                ...state,
                list: action.movies
            }
        case ADD_FAVOURITE:
            return {
                ...state,
                favourites: [action.movie, ...state.favourites]
            }
        case REMOVE_FROM_FAVOURITES:
            const filteredArray = state.favourites.filter((movie) => {
                return movie.Title !== action.movie.Title
            })
            return {
                ...state,
                favourites: filteredArray
            }
        default:
            return state;
    }
    
}


