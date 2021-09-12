import paths from '../routes/paths';
import testIds from './testIds';

const pageItems = {
  customer: {
    navItems: [
      {
        text: 'Produtos',
        testId: testIds.id11,
        path: paths.customer.products,
      },
      {
        text: 'Meus pedidos',
        testId: testIds.id12,
        path: paths.customer.orders,
      },
    ],
    orderButtonGroup: [
      {
        text: 'Marcar como entregue',
        testId: testIds.id47,
        enableWith: 'Em Trânsito',
        stateToSet: 'Entregue',
      },
    ],
  },
  seller: {
    navItems: [
      {
        text: 'Pedidos',
        testId: testIds.id12,
        path: paths.seller.orders,
      },
    ],
    orderButtonGroup: [
      {
        text: 'Preparar pedido',
        testId: testIds.id57,
        enableWith: 'Pendente',
        stateToSet: 'Preparando',
      },
      {
        text: 'Saiu para entrega',
        testId: testIds.id58,
        enableWith: 'Preparando',
        stateToSet: 'Em Trânsito',
      },
    ],
  },
  administrator: {},
};

export default (role) => pageItems[role];
