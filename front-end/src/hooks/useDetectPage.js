import { useLocation } from 'react-router-dom';
import { useUserDataContext } from '../context/contexts';
import paths from '../routes/paths';

const useDetectPage = () => {
  const { pathname } = useLocation();
  const { role } = useUserDataContext();
  const isCheckout = pathname === paths.customer.checkout;
  const isOrderDetails = pathname.includes(paths.customer.orders);
  const isSellerPage = role === 'seller';

  return { isCheckout, isOrderDetails, isSellerPage };
};

export default useDetectPage;
