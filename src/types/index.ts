export type Product = {
    id?: string;
    name: string;
    description: string;
    category_id: string;
    image: string;
    price: number;
}

export type Category = {
    id?: string;
    name: string;
    description: string;
}

export type ProductResponse = {
    mutate: (data: Product) => Promise<void>;
    data: Product | null;
    pending: boolean;
    error: Error | null;
    message: string;
    status: string;
}

export type CategoryResponse = {
    mutate: (data: Category) => Promise<void>;
    data: Category | null;
    pending: boolean;
    error: Error | null;
    message: string;
    status: string;
}

// export type UpdateProductResponse = {
//     mutate: (data: Product) => Promise<void>;
//     data: Product | null;
//     loading: boolean;
//     error: Error | null;
//     message: string;
//     status: string;
// }

// export type UpdateCategoryResponse = {
//     mutate: (data: Category) => Promise<void>;
//     data: Category | null;
//     loading: boolean;
//     error: Error | null;
//     message: string;
//     status: string;
// }