import { useState, useEffect } from "react";
import axiosInstance from "../../libs/axios";

export const useProducts = (limit: number, page: number) => {
  const [state, setState] = useState({
    data: [],
    isLoading: true,
    error: null,
    totalPages: 1,
  });

  useEffect(() => {
    const fetchProducts = async () => {
      setState((prev) => ({ ...prev, isLoading: true, error: null }));

      try {
        const response = await axiosInstance.get(`/products`, {
          params: { limit, page },
        });
        setState({
          data: response.data.data.products,
          isLoading: false,
          error: null,
          totalPages: Math.ceil(response.data.data.total / limit),
        });
      } catch (error) {
        setState((prev) => ({
          ...prev,
          isLoading: false,
          error:
            error instanceof Error ? error : new Error("An error occurred"),
        }));
      }
    };

    fetchProducts();
  }, [limit, page]);

  return state;
};
