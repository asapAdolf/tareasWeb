import { inventory } from '../data/database.js';

export const filterByCategory = (category) => {
    return inventory.filter((item) => item.categoria === category);
};

export const hasOutOfStockProducts = () => {
    return inventory.some((item) => item.stock === 0);
};

export const getOffersByCategory = (category) => {
    return inventory
        .filter((item) => item.categoria === category)
        .map((item) => {
            return {
                producto: item.producto,
                originalPrice: item.precio,
                salePrice: item.precio * 0.80
            };
        });
};