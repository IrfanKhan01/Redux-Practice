

import ActionTypes from '../constant/constant'


export const INITIAL_STATE = {

    tasks: ['First', 'Second', 'Third', 'Forth']

}

export function Reducer(state = INITIAL_STATE, action) {

    switch (action.type) {

        case ActionTypes.ADD_TODO:
            return ({
                ...state,
                tasks: [...state.tasks, action.payload]
            })


        case ActionTypes.DELETE_TODO:
            return ({
                ...state,
                tasks: [...state.tasks.slice(0, action.payload), ...state.tasks.slice(action.payload + 1)]
            })


        case ActionTypes.UPDATE_TODO:

        // let a = {...state.tasks[action.payload.index] = action.payload.newVal}
        //     console.log(a)
            let newArray = {
                ...state.tasks.splice(action.payload.index, 1, action.payload.newVal)
            }
            console.log(newArray)
            // console.log(...state.tasks[action.payload.index] = action.payload.newVal)
            return ({
                ...state,
                tasks: [...state.tasks]
            })
        default:
            return state
    }

}