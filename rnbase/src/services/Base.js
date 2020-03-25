import qs from 'qs';
import axios from 'axios';

const instance = axios.create({
  timeout: 100000,
  maxContentLength: 10000,
});

const defaultOptions = {
  headers: {
    accept: 'application/json',
    contentType: 'application/json',
  },
};

export const getFn = (url, params, options) => {
  return new Promise((resolve, reject) => {
    console.log(url);
    instance
      .get(url, {
        ...defaultOptions,
        params,
        paramsSerializer: params => {
          return qs.stringify(params, {arrayFormat: 'repeat'});
        },
        ...options,
      })
      .then(({data}) => resolve(data))
      .catch(error => {
        if (error.response !== undefined) {
          reject(error.response.data.message);
        } else {
          reject('Can not connect to server');
        }
      });
  });
};

export const postFn = (url, body, options) => {
  return new Promise((resolve, reject) => {
    instance
      .post(url, body, {
        ...defaultOptions,
        ...options,
      })
      .then(({data}) => {
        resolve(data);
      })
      .catch(error => {
        if (error.response !== undefined) {
          reject(error.response.data.message);
        } else {
          reject('Can not connect to server');
        }
      });
  });
};

export const putFn = (url, body, options) => {
  return new Promise((resolve, reject) => {
    instance
      .put(url, body, {
        ...defaultOptions,
        ...options,
      })
      .then(({data}) => {
        resolve(data);
      })
      .catch(error => {
        if (error.response !== undefined) {
          reject(error.response.data.message);
        } else {
          reject('Can not connect to server');
        }
      });
  });
};

export const deleteFn = (url, options) => {
  return new Promise((resolve, reject) => {
    instance
      .delete(url, {
        ...defaultOptions,
        ...options,
      })
      .then(({data}) => {
        resolve(data);
      })
      .catch(error => {
        if (error.response !== undefined) {
          reject(error.response.data.message);
        } else {
          reject('Can not connect to server');
        }
      });
  });
};
