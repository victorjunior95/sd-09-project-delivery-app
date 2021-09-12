import Login from './Login';
import Home from './Home';
import NotFound from './NotFound';
import Register from './Register';
import Checkout from './customer/Checkout';
import Products from './customer/Products';
import CostumerOrderDetails from './customer/OrderDetails';
import CostumerOrders from './customer/Orders';
import SellerOrders from './seller/Orders';

const common = { Login, Home, NotFound, Register };
const costumer = {
  Checkout,
  Products,
  Orders: CostumerOrders,
  OrderDetails: CostumerOrderDetails,
};
const seller = {
  Orders: SellerOrders,
  // OrderDetails,
};

export {
  common,
  costumer,
  seller,
};
