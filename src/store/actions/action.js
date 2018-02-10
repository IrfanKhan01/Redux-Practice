
import ActionTypes from '../constant/constant';
// import { INITIAL_STATE } from '../reducers/reducer';


export function addTodo(value) {
    
    return dispatch => {

        dispatch({
            type: ActionTypes.ADD_TODO,
            payload: [value]
        })
    }
}

export function deleteTodo(index) {

    return dispatch => {
        
        dispatch({
            type: ActionTypes.DELETE_TODO,
            payload: index
        })
    }
}


export function updateTodo(newVal, index) {

   
  
    return dispatch => {

        dispatch({
            type: ActionTypes.UPDATE_TODO,
            payload: {index, newVal}
        })
    }
}
