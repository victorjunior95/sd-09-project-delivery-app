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
      orderPrice(id) {
        return `customer_orders__element-card-price-${id}`;
      },
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
  seller: {
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
      orderId: testIds.id48,
      orderDeliveryStatus: testIds.id49,
      orderDate: testIds.id50,
      orderPrice: testIds.id51,
      orderAddress: testIds.id52,
    },
    orderDetails: {
      orderId: testIds.id54,
      // orderSeller: testIds.id38,
      orderDate: testIds.id56,
      orderDeliveryStatus: testIds.id55,
      orderSetDeliveredButton: testIds.id47,
      productIndex: testIds.id59,
      productName: testIds.id60,
      productQuantity: testIds.id61,
      productUnitPrice: testIds.id62,
      productSubTotal: testIds.id63,
      totalPrice: testIds.id64,
    },
  },
};
export default (role, page) => contextTextIds[role][page];
