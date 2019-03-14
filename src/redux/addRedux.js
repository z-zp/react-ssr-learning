
import Immutable from 'seamless-immutable'
import { createReducer, createActions } from 'reduxsauce'
import axios from 'axios'
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
    error:null
})

export const request = (state, action) => {
    let {server}=action
    if(server){
        // 注水
        return state.set('fetching', true)
                    .set('error',false)
                    .set('number',action.obj.number)
    }
    return state.set('fetching', true)
                .set('error',false)
}
export const success = (state, action) => {
    let {number} = action
    function add (x, y) { return x + y }
    return state.set('fetching', false)
                .set('error',false)
                .set('number',number)
}
export const failure = (state, action) => {
    console.log('failure')

    return state.set('fetching', false)
                .set('error',true)
}

const reducer =  createReducer(INITIAL_STATE, {
    [Types.ADD_NUMBER_REQ]: request,
    [Types.ADD_NUMBER_SUC]: success,
    [Types.ADD_NUMBER_FAILURE]: failure,
  })
export default reducer