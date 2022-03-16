import createSagaMiddleware from 'redux-saga'
import { all, fork } from 'redux-saga/effects'
import { combineReducers } from 'redux'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import { charactersSaga } from './sagas'
import { charactersReducer, uiReducer } from './store'

function* rootSaga() {
  yield all([fork(charactersSaga)])
}

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  characters: charactersReducer,
  ui: uiReducer,
})

const store = configureStore({
  reducer: rootReducer,
  middleware: [
    ...getDefaultMiddleware({ thunk: false, serializableCheck: false }),
    sagaMiddleware,
  ],
  devTools: process.env.NODE_ENV !== 'production',
})

sagaMiddleware.run(rootSaga)

export default store