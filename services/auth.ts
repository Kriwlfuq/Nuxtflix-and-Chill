import axios from 'axios';
import endpoints from '@/config';

export default class AdminService {
  static userLogin(noinduksiswa: string, password: string) {
    return axios.post(endpoints.auth.login, {
      noinduksiswa,
      password,
    });
  }
  static adminLogin(username: string, password: string) {
    return axios.post(endpoints.auth.admin, {
      username,
      password,
    });
  }
}
