import { API_BASE_URL, DEVELOPMENT_ENV, ENV } from './../constants/constants';
import axios, { AxiosInstance } from 'axios';
import * as AxiosLogger from 'axios-logger';
import axiosRetry from 'axios-retry';
import fileDownload from 'js-file-download';

export class RequestService {
  client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: API_BASE_URL
    });

    if (ENV === DEVELOPMENT_ENV) {
      this.setLoggerInterceptor();
    }
  }

  setLoggerInterceptor() {
    this.client.interceptors.request.use(
      AxiosLogger.requestLogger,
      AxiosLogger.errorLogger
    );

    this.client.interceptors.response.use(
      AxiosLogger.responseLogger,
      AxiosLogger.errorLogger
    );
  }

  setRetryInterceptor() {
    axiosRetry(this.client, { retries: 3 });
  }

  setLogoutOnUnauthorizedInterceptor(logout: () => void) {
    this.client.interceptors.response.use(
      (config) => config,
      (error) => {
        if (error.response?.status === 401) {
          logout();
        }

        return Promise.reject(error);
      }
    );
  }

  async downloadFile(url: string, fileName: string) {
    const response = await axios.create().get(url, {
      responseType: 'blob'
    });
    fileDownload(response.data, fileName);
  }
}

const requestServiceSingleton = new RequestService();
export default requestServiceSingleton;
