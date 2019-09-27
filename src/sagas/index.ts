import { all, spawn } from 'redux-saga/effects'
import { actionWatcher as users } from 'features/Admin/features/Users'
import { actionWatcher as tasks } from 'features/Tasks'

export default function* rootSaga() {
  yield all([spawn(users)])
  yield all([spawn(tasks)])
}
