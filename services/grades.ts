import axios from 'axios';

export default class Grades {
  static async get(url: string) {
    const res = await axios.get(url);
    if (res.status !== 200) return [];
    return res.data;
  }
}
