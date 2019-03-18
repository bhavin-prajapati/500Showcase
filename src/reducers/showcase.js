import {
  GET_POPULAR,
  GET_POPULAR_SUCCESS,
  GET_POPULAR_FAIL
} from "../utils/constants";

export default (state = Object.assign({}), action) => {
  switch (action.type) {
    case GET_POPULAR:
      return Object.assign({}, state, {
        message: null,
        loading: true,
        error: null
      });
    case GET_POPULAR_SUCCESS:
      if (state.photos) {
        return Object.assign({}, state, {
          current_page: action.data.current_page,
          loading: false,
          photos: [...state.photos, ...action.data.photos]
        });
      }
      return Object.assign({}, state, {
        ...action.data,
        loading: false
      });
    case GET_POPULAR_FAIL:
      return Object.assign({}, state, {
        message: null,
        loading: false,
        error: action.data
      });
    default:
      return state;
  }
};
