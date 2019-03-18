// Action Types
export const GET_POPULAR = "GET_POPULAR";
export const GET_POPULAR_SUCCESS = "GET_POPULAR_SUCCESS";
export const GET_POPULAR_FAIL = "GET_POPULAR_FAIL";

// API
export const API_CONSUMER_KEY =
  process.env.REACT_APP_API_CONSUMER_KEY || "<insert api consumer key>";
export const BASE_URL = process.env.BASE_URL || "https://api.500px.com/v1";
export const PHOTOS_ENDPOINT = "/photos";
