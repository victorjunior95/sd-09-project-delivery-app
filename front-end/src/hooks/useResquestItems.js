import { useState, useEffect } from 'react';
import {
  useRequestActionContext,
  useUserDataContext,
} from '../context/contexts';
import requestApi from '../services/api';

const useResquestItems = ({ endpoint, responseKey, initialState = [] }) => {
  const [items, setItems] = useState(() => initialState);
  const { token } = useUserDataContext();
  const toggleRequesting = useRequestActionContext();

  toggleRequesting();
  useEffect(() => {
    const requestProducts = async () => {
      const { data: { [responseKey]: requestedItems } } = await requestApi(
        { method: 'get', endpoint, token },
      );
      setItems(requestedItems);
      toggleRequesting();
    };
    requestProducts();
  }, []);

  return items;
};

export default useResquestItems;
