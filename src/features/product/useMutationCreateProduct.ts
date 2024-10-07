import { useState } from "react";
import { Product, ProductResponse } from "../../types";
import axiosInstance from "../../libs/axios";

export const useMutationCreateProduct = (): ProductResponse => {
  const [state, setState] = useState<Omit<ProductResponse, 'mutate'>>({
    data: null,
    pending: false,  
    error: null,
    message: '',                                             
    status: ''
  });

  const mutate = async (data: Product) => {
    setState(prev => ({ ...prev, pending: true }));  
    try {
      const response = await axiosInstance.post('/products', data);
      setState({
        data: response.data.data,
        pending: false,  
        error: null,
        message: response.data.message,
        status: response.data.status
      });
    } catch (err) {
      setState(prev => ({
        ...prev,
        pending: false, 
        error: err instanceof Error ? err : new Error('An error occurred while creating the product'),
      }));
    }
  };

  return {
    ...state,
    mutate,  
  };
};
