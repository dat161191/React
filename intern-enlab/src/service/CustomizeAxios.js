import axios from "axios";
// Config lại axios
export const instance = axios.create({
  baseURL: 'https://opentdb.com/api.php?amount=5',
});

instance.interceptors.response.use(function (response) {
    return response.data ? response.data : { httpStatusCode: response.status };
  }, function (error) {
    let result = {};
    if (error.response) {
      result = error.response;
    }
    return result;
  });
  