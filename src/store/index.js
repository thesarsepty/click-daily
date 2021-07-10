import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import employeeReducer from './reducers/employeeReducer'

const reducers = employeeReducer
const middlewares = applyMiddleware(ReduxThunk)

const store = createStore(reducers, middlewares)

export default store