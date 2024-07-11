import axios from 'axios';
import endpoints from '@/config';
export default class StatisticService {
  static async gender(token: string) {
    try {
      const res = await axios.get(endpoints.statistic.gender, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.status !== 200) return [];
      return res.data;
    } catch (error) {
      throw error;
    }
  }
}
