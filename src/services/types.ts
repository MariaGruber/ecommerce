interface Review {
    id: number;
    userId: number;
    rating: number;
    comment: string;
    date: string;
};

export interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    image: string[];
    description: string;
    category: string;
    brand: string;
    rating: number;
    reviews: Review[];
    filters: string[];
}