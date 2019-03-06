import React from 'react'
import { Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Home from './containers/Home'
import Login from './containers/Login'
import reducer from './redux'
const store = createStore(reducer)
export default (
    <Provider store={store}>
        <div>
            <Route path='/' exact component={Home}></Route>
            <Route path='/login' exact component={Login}></Route>
        </div>
    </Provider>

)
