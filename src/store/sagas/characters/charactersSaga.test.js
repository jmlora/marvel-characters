import { call } from 'redux-saga/effects'
import { expectSaga } from 'redux-saga-test-plan'
import { getCharactersSaga } from './charactersSagas'
import { getCharactersAction } from './charactersSagasActions'
import { isFetchingAction } from '../../store/ui/uiActions'
import { resetCharactersAction, setCharactersAction } from '../../store/characters/charactersActions'
import * as matchers from 'redux-saga-test-plan/matchers'

it('just works!', () => {
  const fakeData = [{name: 'Storm'}]

  const fetchCharacters = () => fakeData

  return expectSaga(getCharactersSaga, { payload: { searchString: '', page: 0}})
    .provide([
      [matchers.call.fn(fetchCharacters), {searchString: '', page: 0}]
    ])
    .put({
      type: resetCharactersAction.type,
      payload: undefined,
    })
    .put({
      type: isFetchingAction.type,
      payload: { isFetching: true },
    })
    .call(fetchCharacters, { searchString: '', page: 0 })
    .put({
      type: setCharactersAction.type,
      payload: { }
    })
    // Start the test. Returns a Promise.
    .run()
});