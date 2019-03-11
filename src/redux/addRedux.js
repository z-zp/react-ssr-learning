
import Immutable from 'seamless-immutable'
import { createReducer, createActions } from 'reduxsauce'
// import {Map} from 'immutable'
const { Types, Creators } = createActions({
    addNumberReq: ['params'],
    addNumberSuc: ['params'],
    addNumberFailure: ['params'], 
})

export const AddNumberTypes = Types
const INITIAL_STATE = Immutable({
    number:null,
    fetching:false,
    error:null,
    a:{b:'123'}
})

export const request = (state, action) => {
    return state.set('fetching', true)
                .set('error',false)
}
export const success = (state, action) => {
    let {number} = action
    function add (x, y) { return x + y }
    return state.set('fetching', false)
                .set('error',false)
                .updateIn(['number'],add,number)
}
export const failure = (state, action) => {
    return state.set('fetching', false)
                .set('error',true)
}

const reducer =  createReducer(INITIAL_STATE, {
    [Types.ADD_NUMBER_REQ]: request,
    [Types.ADD_NUMBER_SUC]: success,
    [Types.ADD_NUMBER_FAILURE]: failure,
  })
export default reducer