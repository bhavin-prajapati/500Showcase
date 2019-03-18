import {
  GET_POPULAR,
  GET_POPULAR_SUCCESS,
  GET_POPULAR_FAIL
} from "../utils/constants";

export const getPopular = () => {
  return { type: GET_POPULAR };
};

export const getPopularSuccess = (page, message) => {
  return { type: GET_POPULAR_SUCCESS, page: page, data: message };
};

export const getPopularFailed = error => {
  return { type: GET_POPULAR_FAIL, data: error };
};
