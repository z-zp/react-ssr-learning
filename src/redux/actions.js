import {
  AddNumberTypes
} from './addReducer'
export const addNumberAction = (obj) => {
    return {
      type: AddNumberTypes.ADD_NUMBER_REQ,
      obj,
      server:false
    }
}
