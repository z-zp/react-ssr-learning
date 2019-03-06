import React from 'react'
import { Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore,applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import Home from './containers/Home'
import Login from './containers/Login'
import reducer from './redux'
import rootSaga from './saga'
const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)
export default (
    <Provider store={store}>
        <div>
            <Route path='/' exact component={Home}></Route>
            <Route path='/login' exact component={Login}></Route>
        </div>
    </Provider>

)
