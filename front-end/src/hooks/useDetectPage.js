import { useLocation } from 'react-router-dom';
import paths from '../routes/paths';

const useDetectPage = () => {
  const { pathname } = useLocation();
  const isCheckout = pathname === paths.customer.checkout;
  const isOrderDetails = pathname.includes(paths.customer.orders);

  return { isCheckout, isOrderDetails };
};

export default useDetectPage;
