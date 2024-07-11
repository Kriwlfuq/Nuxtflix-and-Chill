const baseUrl = 'https://cp-gamma.vercel.app';
// const baseUrl = 'http://localhost:3002';
// const baseUrl =
//   process.env.NODE_ENV === 'production'
//     ? 'https://cp-gamma.vercel.app'
//     : 'http://localhost:3002';
const endpoints = {
  baseUrl: baseUrl,
  auth: {
    login: `${baseUrl}/login-siswa`,
    register: `${baseUrl}/login-siswa`,
    logout: `${baseUrl}/login-siswa`,
    admin: `${baseUrl}/login-admin`,
    family: `${baseUrl}/login-orangtua`,
    token: `${baseUrl}/decodeToken`,
  },
  grades: {
    get: `${baseUrl}/historysiswa`,
    getOne: (id: string) => `${baseUrl}/historysiswa/${id}`,
  },
  students: {
    get: `${baseUrl}/filter-siswa`,
    getOne: (id: string) => `${baseUrl}/search-siswa/${id}`,
    post: `${baseUrl}/create-siswa`,
    update: (nis: string) => `${baseUrl}/update-siswa/${nis}`,
    delete: (nis: string) => `${baseUrl}/siswa/${nis}`,
  },
  users: {
    getUser: (userId: any) => `${baseUrl}/users/${userId}`,
    getAllUsers: `${baseUrl}/users`,
  },
  posts: {
    getPost: (postId: any) => `${baseUrl}/posts/${postId}`,
    getAllPosts: `${baseUrl}/posts`,
  },
  statistic: {
    gender: `${baseUrl}/statistic/gender`,
  },
  duedate: {
    getOne: (nis: string) =>
      `${baseUrl}/current-and-next-month-payments/${nis}`,
  },
  history: {
    pembayaran: {
      getOne: (historySiswaId: any) =>
        `${baseUrl}/cek-history-pembayaran/${historySiswaId}`,
      updateOne: (historysiswaid: string, biayasekolahid: string) =>
        `${baseUrl}/update-info-pembayaran/${historysiswaid}/${biayasekolahid}`,
    },
    students: {
      get: `${baseUrl}/historysiswa`,
    },
  },
  payments: {
    getOne: (paymentId: any) => `${baseUrl}/payments/${paymentId}`,
  },
};

export default endpoints;
