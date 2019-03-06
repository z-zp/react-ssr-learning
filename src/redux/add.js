
const initialState = {
    number:0
}
export default function changeNum(state = initialState,action){

    switch (action.type) {
        case 'ADD_NUMBER':
        
          return Object.assign({}, state, {
            number: ++state.number
          });
        default:
          return state
    }
   
}
