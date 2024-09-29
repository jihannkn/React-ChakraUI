import { useEffect, useState } from "react";
import { ProductResponse } from "../../types";
import axiosInstance from "../../libs/axios";

export const useProduct = () => {
  const [state, setState] = useState<Omit<ProductResponse, 'mutate'>>({
    data: null,
    pending: false,
    error: null,
    message: "",
    status: "",
  })

  useEffect(() => {
    axiosInstance.get(`/products`).then(response =>
        setState({
          data: response.data.data,
          pending: false,
          error: null,
          message: response.data.message,
          status: response.data.status,
        })
      ).catch(error =>
        setState(prev => ({
          ...prev,
          pending: false,
          error: error instanceof Error ? error : new Error("An error occurred while fetching the products"),
        }))
      )
  }, []);
  return {
    ...state,
  };
}
