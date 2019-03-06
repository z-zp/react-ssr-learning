
const initialState = {
    number:0,
    fetching:false,
    error:null
}
export default function changeNum(state = initialState,action){
    switch (action.type) {
        case 'ADD_NUMBER_REQ':
        
          return Object.assign({}, state, {
            fetching:true,error:null
          });
        case 'ADD_NUMBER_SUC':{
            const {number} = action
            return Object.assign({}, state, {
                number:state.number +number,
                fetching:false
            });
        }
        case 'ADD_NUMBER_FAILURE':{
            return Object.assign({}, state, {
                fetching:false,
                error:true
            });
        }
        default:
          return state
    }
   
}
