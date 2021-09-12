import testIds from './testIds';

const contextTextIds = {
  customer: {
    checkout: {
      productIndex: testIds.id22,
      productName: testIds.id23,
      productQuantity: testIds.id24,
      productUnitPrice: testIds.id25,
      productSubTotal: testIds.id26,
      productRemoveButton: testIds.id27,
      totalPrice: testIds.id28,
      formSelectSeller: testIds.id29,
      formAddress: testIds.id30,
      formAddressNumber: testIds.id31,
      formSubmitOrder: testIds.id32,
    },
    orderDetails: {},
  },
};

export default (role, page) => contextTextIds[role][page];
