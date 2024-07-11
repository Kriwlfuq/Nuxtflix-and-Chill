export default class AdminServices {
  static getHistories() {
    return [
      {
        id: 1,
        kode: 'SPP-01',
        fullname: 'John Doe',
        division: 'X',
        nis: '123456789',
        paymentDate: '2023-01-01',
        paymentType: '1',
        paymentTotal: '100000',
        paymentMethod: 'Cash',
        paymentStatus: 'Paid',
      },
      {
        id: 2,
        kode: 'SPP-02',
        fullname: 'John Doe',
        division: 'X',
        nis: '123456789',
        paymentDate: '2023-01-01',
        paymentType: '1',
        paymentTotal: '100000',
        paymentMethod: 'Cash',
        paymentStatus: 'Paid',
      },
    ];
  }
}
