import { setLocalStorageData, getLocalStorageData } from "../utils/localStorage";
import { LOCAL_STORAGE } from "../utils/constants";
import { Product } from "./types";
import productsData  from '../products.json';

export const getProducts = (): unknown => {
    const data = getLocalStorageData(LOCAL_STORAGE.PRODUCTS);
    if (data && Object.values(data).length) return data;

    setLocalStorageData(LOCAL_STORAGE.PRODUCTS, productsData);
    return productsData;
};

export const getProductById = (id: number): Product | undefined => {
    if (!id) {
        console.error('Debe proporcionar un ID de producto', id);
        return;
    }

    const { products } = getLocalStorageData(LOCAL_STORAGE.PRODUCTS);

    if (products && Array.isArray(products)) {
        return products.find((product: Product) => product.id === id);
    }

    return;
};
