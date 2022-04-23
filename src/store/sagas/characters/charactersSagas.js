import { takeLatest, all, call, put } from 'redux-saga/effects'
import { GET_CHARACTERS_ACTION } from './charactersSagasActions'
import fetchCharacters from '../../../api/characters'
import { resetCharactersAction, setCharactersAction } from '../../store/characters/charactersActions'
import { isFetchingAction } from '../../store/ui/uiActions'

export function* getCharactersSaga({ payload: { searchString, page }}) {
  if (searchString.length > 0 && page === 0) {
    yield put(resetCharactersAction())
  } else if (page === 0) {
    yield put(resetCharactersAction())
  }

  yield put(isFetchingAction({isFetching: true}))
  const data = yield call(fetchCharacters, {searchString, page})
  yield put(setCharactersAction(data))
  yield put(isFetchingAction({isFetching: false}))
}

function* watchGetCharactersSaga() {
  yield takeLatest(GET_CHARACTERS_ACTION, getCharactersSaga)
}

export default function* charactersSaga() {
  yield all([
    watchGetCharactersSaga(),
  ])
}