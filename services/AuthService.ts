import endpoints from '@/config';
import axios from 'axios';

class AuthService {
  static payload(token = '') {
    return axios.get(endpoints.auth.token, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  static user(noinduksiswa: string, password: string) {
    return axios.post(endpoints.auth.login, {
      noinduksiswa,
      password,
    });
  }

  static family(username: string, password: string) {
    return axios.post(endpoints.auth.family, {
      username,
      password,
    });
  }

  static admin(username: string, password: string) {
    return axios.post(endpoints.auth.admin, {
      username,
      password,
    });
  }
}

export default AuthService;
