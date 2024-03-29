import { put, delay, takeLatest } from 'redux-saga/effects'
import * as actions from './actions'
import * as types from './types'
import users from '../mocks/users'

export function* fetch({ payload }: ReturnType<typeof actions.fetch>) {
  try {
    yield delay(2000)

    yield put(actions.fetchSuccess(users))
  } catch (e) {
    yield put(
      actions.fetchError({
        title: 'Упс!',
        description: 'Ошибка загрузки пользователей!',
        status: 404,
      })
    )
  }
}

export default function* actionWatcher() {
  yield takeLatest(types.ENTITIES_FETCH_REQUEST, fetch)
}
