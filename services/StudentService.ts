import axios from 'axios';
import endpoints from '@/config';
export default class StudentService {
  static async get(nis: string, token: string) {
    try {
      const res = await axios.get(endpoints.students.getOne(nis), {
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

  static async all(token: string) {
    try {
      const res = await axios.get(endpoints.students.get, {
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

  static async update(nis: string, data: any, token: string) {
    try {
      const res = await axios.put(endpoints.students.update(nis), data, {
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

  static async delete(nis: string, token: string) {
    try {
      const res = await axios.delete(endpoints.students.delete(nis), {
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
