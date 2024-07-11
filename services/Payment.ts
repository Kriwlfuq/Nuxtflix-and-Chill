import axios from 'axios';
import endpoints from '@/config';
export default class Payment {
  static async get(paymentId: string, token: string) {
    try {
      const res = await axios.get(endpoints.payments.getOne(paymentId), {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res.statusText === 'OK');
      if (res.status !== 200) return [];
      return res.data;
    } catch (error) {
      console.log('Payment', error);
      throw error;
    }
  }

  static async update(
    historyId: string,
    paymentId: string,
    data: any,
    token: string
  ) {
    try {
      const res = await axios.put(
        endpoints.history.pembayaran.updateOne(historyId, paymentId),
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res.statusText === 'OK');
      if (res.status !== 200) true;
      return res.data;
    } catch (error) {
      console.log('Payment', error);
      throw error;
    }
  }
}
