import { useLocation } from 'react-router-dom';
import { useUserDataContext } from '../context/contexts';
import paths from '../routes/paths';

const useDetectPage = () => {
  const { pathname } = useLocation();
  const { role } = useUserDataContext();
  const isCheckout = pathname === paths.customer.checkout;
  const isOrderDetails = pathname.includes('orders');
  const isSellerPage = role === 'seller';
  const isCustomerPage = role === 'customer';

  return { isCheckout, isOrderDetails, isSellerPage, isCustomerPage };
};

export default useDetectPage;
