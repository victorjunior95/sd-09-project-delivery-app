import { useState } from 'react';
import { useUserDataContext } from '../context/contexts';
import requestApi from '../services/api';

const useUpdateOrderStatus = ({ id, initialStatus }) => {
  const [status, setStatus] = useState(() => initialStatus);
  const { token, role } = useUserDataContext();
  const updateOrderStatus = (newStatus) => async () => {
    await requestApi({
      method: 'put',
      endpoint: `${role}/orders/${id}`,
      data: { status: newStatus },
      token,
    });
    setStatus(newStatus);
  };

  return { status, updateOrderStatus };
};

export default useUpdateOrderStatus;
