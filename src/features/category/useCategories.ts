import { useEffect, useState } from "react";
import { CategoryResponse } from "../../types";
import axiosInstance from "../../libs/axios";

export const useCategories = () => {
  const [state, setState] = useState<Omit<CategoryResponse, 'mutate'>>({
    data: null,
    pending: false,
    error: null,
    message: "",
    status: "",
  })

  useEffect(() => {
    axiosInstance.get(`/categories`).then(response =>
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
          error: error instanceof Error ? error : new Error("An error occurred while fetching the categories"),
        }))
      )
  }, []);
  return {
    ...state,
  };
}
