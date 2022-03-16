import { createReducer } from '@reduxjs/toolkit'
import { isFetchingAction } from './uiActions'

const uiReducer = createReducer([], (builder) => {
  builder
    .addCase(isFetchingAction, (state, {payload}) => {
      return {
        ...state,
        isFetching: payload.isFetching
      }
    })
})

export default uiReducer