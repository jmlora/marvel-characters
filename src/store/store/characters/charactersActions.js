import { createAction } from '@reduxjs/toolkit'

const SET_CHARACTERS_ACTION = 'SET_CHARACTERS_ACTION'

export const setCharactersAction = createAction(SET_CHARACTERS_ACTION)

const RESET_CHARACTERS_ACTION = 'RESET_CHARACTERS_ACTION'

export const resetCharactersAction = createAction(RESET_CHARACTERS_ACTION)

