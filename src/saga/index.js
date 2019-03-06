import { takeLatest, takeEvery, call, put,all } from 'redux-saga/effects'

export function* incrementAsync() {
  const number = yield call(()=>{
    return new Promise(function(resolve){
        setTimeout(()=>{
            resolve(Math.floor(Math.random()*10))
        },1000)
      })
  })

  if(number){
      return yield put({type:'ADD_NUMBER_SUC',number})
  }else{
    return yield put({type:'ADD_NUMBER_FAILURE'})
  }
}

export default function* rootSaga() {
    yield all([
        takeLatest('ADD_NUMBER_REQ', incrementAsync)
    ])
 
}
