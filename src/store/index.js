import {createStore} from 'redux'
const initialState = {
    counter : 0 , isAuth : false , isCounter : true
}

const reducerFunction = (state = initialState, action) =>{
    switch(action.type){
        case 'INC' : return {
            counter : state.counter + 1,
            isAuth : state.isAuth,
            isCounter : state.isCounter
        }
        case 'DEC' : return {
            counter : state.counter - 1,
            isAuth : state.isAuth,
            isCounter : state.isCounter
        }
        case 'INCBY5' : return {
            counter : state.counter + 5,
            isAuth : state.isAuth,
            isCounter : state.isCounter
        }
        case 'DECBY5' : return {
            counter : state.counter - 5,
            isAuth : state.isAuth,
            isCounter : state.isCounter
        }
        case 'IsLogin' : return {
            counter : state.counter,
            isAuth : true,
            isCounter : state.isCounter
        }
        case 'IsLogout' : return {
            counter : state.counter,
            isAuth : false,
            isCounter : state.isCounter
        }
        case 'IsCounter' : return {
            counter : state.counter,
            isAuth : state.isAuth,
            isCounter : !state.isCounter
        }
        default : return state
    }
}
const store = createStore(reducerFunction);

export default store;