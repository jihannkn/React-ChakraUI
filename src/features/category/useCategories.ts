import { useEffect, useState } from "react";
import { Category } from "../../types";
import axiosInstance from "../../libs/axios";

interface CategoryState {
    data: {
        categories: Category[] | null;
        total: number;
        totalPages: number;
        page: number;
    } | null;
    isLoading: boolean;
    error: Error | null;
    message: string;
    status: string;
}

export const useCategories = (limit: number, page: number, refreshTrigger: number): CategoryState => {
    const [state, setState] = useState<CategoryState>({
        data: null,
        isLoading: false,
        error: null,
        message: '',
        status: ''
    });

    useEffect(() => {
        const fetchCategory = async () => {
            setState(prev => ({ ...prev, loading: true }));
            try {
                const response = await axiosInstance.get(`/categories`, {
                    params: { limit, page }
                });
                const totalPages = Math.ceil(response.data.data.total / limit);
                setState({
                    data: { ...response.data, totalPages },
                    isLoading: false,
                    error: null,
                    message: response.data.message,
                    status: response.data.status
                });
            } catch (err) {
                setState(prev => ({
                    ...prev,
                    loading: false,
                    error: err instanceof Error ? err : new Error('An error occurred while fetching categories'),
                }));
            }
        };

        fetchCategory();
    }, [limit, page, refreshTrigger]);

    return state;
};
