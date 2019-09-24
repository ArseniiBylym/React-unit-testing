import axios from 'axios';
import {BASE_URL} from '../config/api';

export const URL_PATH = {
  TODOS: '/api/todos',
};

class FetchApi {
  static commonHeaders = () => {
    return {'Content-Type': `application/json`};
  };

  get = (url, params = undefined) => {
    return axios(BASE_URL + url, {
      method: 'get',
      headers: this.constructor.commonHeaders(),
      params,
    });
  };

  post = (url, data, params = undefined) => {
    console.log({data})
    return axios(BASE_URL + url, {
      method: 'post',
      headers: this.constructor.commonHeaders(),
      data: JSON.stringify(data),
      params,
    });
  };

  put = (url, data, params = undefined) => {
    return axios(BASE_URL + url, {
      method: 'put',
      headers: this.constructor.commonHeaders(),
      data: JSON.stringify(data),
      params,
    });
  };

  delete = (url, params = undefined) => {
    return axios(BASE_URL + url, {
      method: 'delete',
      headers: this.constructor.commonHeaders(),
      params,
    });
  };
}

export const fetchApi = new FetchApi();
