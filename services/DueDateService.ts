import axios from 'axios';
import endpoints from '@/config';
export default class DueDateService {
  static async get(nis: string, token: string) {
    try {
      const res = await axios.get(endpoints.duedate.getOne(nis), {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.status !== 200) return [];
      console.log(res);
      return res.data;
    } catch (error) {
      throw error;
    }
  }
}
