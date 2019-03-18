import { BASE_URL, PHOTOS_ENDPOINT, API_CONSUMER_KEY } from "./constants";

const getPopular = page => {
  const options = {
    method: "get"
  };
  return fetch(
    `${BASE_URL}${PHOTOS_ENDPOINT}?feature=popular&consumer_key=${API_CONSUMER_KEY}&page=${page}&rpp=100&image_size=2,1080,2048`,
    options
  ).then(res => res.json());
};

export default {
  getPopular
};
