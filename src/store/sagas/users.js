import { call, put, select } from 'redux-saga/effects';
import api from '../../services/api';
import { Creators as UserActions } from '../ducks/users';
import { buildToast, ToastTypes } from '../ducks/toasts';

export function* addUser(action) {
  try {
    const { data } = yield call(api.get, `/users/${action.payload.user}`);

    const isDuplicated = yield select(state => state.users.data.find(user => user.id === data.id));

    if (isDuplicated) {
      yield put(
        UserActions.addUserFailure({
          error: 'Usuário duplicado',
          toast: buildToast('Usuário duplicado', ToastTypes.error),
        }),
      );
    } else {
      const userData = {
        id: data.id,
        name: data.name,
        login: data.login,
        avatar_url: data.avatar_url,
        coords: action.payload.coords,
      };

      yield put(
        UserActions.addUserSuccess({
          data: userData,
          toast: buildToast('Usuário adicionado com sucesso', ToastTypes.success),
        }),
      );
    }
  } catch (err) {
    yield put(
      UserActions.addUserFailure({
        error: 'Erro ao adicionar usuário',
        toast: buildToast('Erro ao adicionar usuário', ToastTypes.error),
      }),
    );
  }
}
