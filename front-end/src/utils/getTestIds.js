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
    ordersList: {
      orderId: testIds.id33,
      orderDeliveryStatus: testIds.id34,
      orderDate: testIds.id35,
      // orderPrice: testIds.id39,
    },
    orderDetails: {
      productIndex: testIds.id41,
      productName: testIds.id42,
      productQuantity: testIds.id43,
      productUnitPrice: testIds.id44,
      productSubTotal: testIds.id45,
      totalPrice: testIds.id46,
      orderId: testIds.id37,
      orderSeller: testIds.id38,
      orderDate: testIds.id39,
      orderDeliveryStatus: testIds.id40,
      orderSetDeliveredButton: testIds.id47,
    },
  },
};

export default (role, page) => contextTextIds[role][page];
