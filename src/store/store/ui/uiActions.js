import { createAction } from '@reduxjs/toolkit'

const IS_FETCHING_ACTION = 'IS_FETCHING_ACTION'

export const isFetchingAction = createAction(IS_FETCHING_ACTION)