import axios from 'axios';
import endpoints from '@/config';

export default class ApiService {
  static async get(url: string) {
    const auth = await axios.post(endpoints.auth.login, {
      noinduksiswa: '1007',
      password: '1007',
    });
    const token = auth.data.token;
    const res = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: false,
    });
    if (res.status !== 200) return [];
    return res.data;
  }
}
