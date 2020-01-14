import { ADD_MOVIE, DELETE_MOVIE, CLEAR_MOVIELIST} from "./MovieType"

export const addMovie=(movieName)=>{
    return{
        type: ADD_MOVIE,
        payload: movieName
    }
}
export const delMovie=(movieId)=>{
    return{
        type: DELETE_MOVIE,
        payload: movieId
    }
}
export const clearList=()=>{
    return{
        type: CLEAR_MOVIELIST,
        
    }
}

