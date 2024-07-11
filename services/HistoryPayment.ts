import axios from 'axios';
import endpoints from '@/config';
export default class HistoryPayment {
  static async get(historySiswaId: string, token: string) {
    try {
      const res = await axios.get(
        endpoints.history.pembayaran.getOne(historySiswaId),
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.info(res.statusText === 'OK');
      if (res.status !== 200) return [];
      return res.data;
    } catch (error) {
      console.warn('Error[HistoryPayment]', error);
      throw error;
    }
  }

  static async getAll(token: string) {
    try {
      const res = await axios.get(endpoints.history.students.get, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.info(res.statusText === 'OK');
      if (res.status !== 200) return [];
      return res.data;
    } catch (error) {
      console.warn('Error[HistoryPayment]', error);
      throw error;
    }
  }

  static async create(data: any, token: string) {
    try {
      const res = await axios.post(endpoints.history.students.get, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.info(res.statusText === 'OK');
      if (res.status !== 200) return [];
      return res.data;
    } catch (error) {
      console.warn('Error[HistoryPayment]', error);
      throw error;
    }
  }
}
