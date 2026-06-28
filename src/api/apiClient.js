import api from './axios';

const apiClient = {
  get: async (url, params = {}) => {
    const response = await api.get(url, { params });

    return {
      data: response.data,
      headers: response.headers,
      status: response.status,
    };
  },

  post: async (url, body) => {
    const response = await api.post(url, body);

    return {
      data: response.data,
      headers: response.headers,
      status: response.status,
    };
  },

  put: async (url, body) => {
    const response = await api.put(url, body);

    return {
      data: response.data,
      headers: response.headers,
      status: response.status,
    };
  },

  patch: async (url, body) => {
    const response = await api.patch(url, body);

    return {
      data: response.data,
      headers: response.headers,
      status: response.status,
    };
  },

  delete: async (url) => {
    const response = await api.delete(url);

    return {
      data: response.data,
      headers: response.headers,
      status: response.status,
    };
  },
};

export default apiClient;