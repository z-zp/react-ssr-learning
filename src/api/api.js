import {get,post} from './require'

const getNumber = (params) => get('/api/number', params) 
export default{
    getNumber
}