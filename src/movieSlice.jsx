import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    disableBtn: {},
    total: 0,
    movieItem: []
}
const movieSlice= createSlice({
    name: "movie",
    initialState,
    reducers: {
        addMovie(state, action){
            const findObIndex=state.movieItem.findIndex((item,index)=>{
                return item.id === action.payload.id
            })
            if(findObIndex === -1){
                state.movieItem.push(action.payload)
                const id = action.payload.id
                state.disableBtn = {...state.disableBtn, [id]: true}
            }
            else{
                return
            }
        },
        deleteMovie(state, action){
            const filterDAta=state.movieItem.filter((item,index)=>{
                return item.id !== action.payload
            })
            state.movieItem = filterDAta
            delete state.disableBtn[action.payload]
        }
    }
})

export default movieSlice.reducer
export const {addMovie, deleteMovie} = movieSlice.actions;