import axios from 'axios';

const { BASE_URL } = process.env;

const request = axios.create({
  baseURL: BASE_URL,
  timeout: 20000,
});

request.interceptors.response.use(
  (config) => config,
  ({ response: { status } }) => Promise.reject(new Error('未知错误')),
);

/**
 * get
 *
 * @param {query} Object
 * @param {query.sign} String
 */
export const get = async (query: {
  sign: string
}) => {
  await request.get('');
};
