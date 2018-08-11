/**
 * Types
 */
export const Types = {
  ADD_REQUEST: 'users/ADD_REQUEST',
  ADD_SUCCESS: 'users/ADD_SUCCESS',
  ADD_FAILURE: 'users/ADD_FAILURE',
  REMOVE: 'users/REMOVE',
};

/**
 * Reducer
 */
const INITIAL_STATE = {
  loading: false,
  data: [],
  error: null,
};

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return { ...state, loading: true };
    case Types.ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        data: [...state.data, action.payload.data],
      };
    case Types.ADD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case Types.REMOVE:
      return {
        ...state,
        loading: false,
        error: null,
        data: state.data.filter(user => user.id !== action.payload.id),
      };
    default:
      return state;
  }
}

/**
 * Actions
 */
export const Creators = {
  addUserRequest: ({ user, coords }) => ({
    type: Types.ADD_REQUEST,
    payload: { user, coords },
  }),

  addUserSuccess: ({ data, toast }) => ({
    type: Types.ADD_SUCCESS,
    payload: { data },
    toast,
  }),

  addUserFailure: ({ error, toast }) => ({
    type: Types.ADD_FAILURE,
    payload: { error },
    toast,
  }),

  removeUser: id => ({
    type: Types.REMOVE,
    payload: { id },
  }),
};
