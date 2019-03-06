
import Immutable from 'seamless-immutable'
import { createReducer, createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
    addNumberReq: ['params'],
    addNumberSuc: ['params'],
    addNumberFailure: ['params'], 
})

export const AddNumberTypes = Types
const INITIAL_STATE = Immutable({
    number:0,
    fetching:false,
    error:null
})

export const request = (state, action) => {
    return state.merge({ fetching: true, error: null })
}
export const success = (state, action) => {
    let  {number} = action
    let {number:oldNumber} = {...state}
    number = number + oldNumber
    return state.merge({number, fetching: false, error: null })
}
export const failure = (state, action) => {
    return state.merge({ fetching: false, error: true })
}

const reducer =  createReducer(INITIAL_STATE, {
    [Types.ADD_NUMBER_REQ]: request,
    [Types.ADD_NUMBER_SUC]: success,
    [Types.ADD_NUMBER_FAILURE]: failure,
  })
export default reducer