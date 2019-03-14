
import { createStore,applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from './redux'
import rootSaga from './saga'
import Immutable from 'seamless-immutable'

const sagaMiddleware = createSagaMiddleware()

export const getStore = ()=>{  // 使每个用户store互相独立
    const store =  createStore(reducer,applyMiddleware(sagaMiddleware))
    sagaMiddleware.run(rootSaga)
    return store
}

export const getClientStore = ()=>{  // 使每个用户store互相独立
    const defaultState = Immutable(window.context.state)
    const store =  createStore(reducer,defaultState,applyMiddleware(sagaMiddleware))
    sagaMiddleware.run(rootSaga)
    return store
}
