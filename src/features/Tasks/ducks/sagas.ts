import { put, delay, takeLatest } from 'redux-saga/effects'
import * as actions from './actions'
import * as types from './types'
import tasks from '../mocks/tasks'

export function* fetch({ payload }: ReturnType<typeof actions.fetch>) {
  try {
    yield delay(2000)

    yield put(actions.fetchSuccess(tasks))
  } catch (e) {
    yield put(
      actions.fetchError({
        title: 'Упс!',
        description: 'Ошибка загрузки задач!',
        status: 404,
      })
    )
  }
}

export default function* actionWatcher() {
  yield takeLatest(types.ENTITIES_FETCH_REQUEST, fetch)
}
