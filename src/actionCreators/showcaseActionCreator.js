import api from "../utils/api";
import * as showcase from "../actions/showcase";

export const getPopular = page => {
  return dispatch => {
    page = page + 1;
    dispatch(showcase.getPopular());
    api.getPopular(page).then(response => {
      if (response.error) {
        dispatch(showcase.getPopularFailed(response.error));
      } else {
        dispatch(showcase.getPopularSuccess(page, response));
      }
    });
  };
};

export default { getPopular };
