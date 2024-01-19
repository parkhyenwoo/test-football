import axios from "axios";

const instance = axios.create({
  baseURL: `http://localhost:8080`,
});

const handleRequestError = (error) => {
  console.error(error);
  throw error;
};

const handleResponseError = (error) => {
  if (!error.response) {
    error.message = "서버에 접속할 수 없습니다.";
    return Promise.reject(error.message);
  }

  const responseData = error.response.data;

  if (
    typeof responseData === "object" &&
    responseData !== null &&
    "message" in responseData
  ) {
    return Promise.reject(responseData.message);
  }

  return Promise.reject("Unexpected error response");
};

instance.interceptors.request.use((request) => {
  return request;
}, handleRequestError);

instance.interceptors.response.use((response) => {
  return response;
}, handleResponseError);

export default instance;
