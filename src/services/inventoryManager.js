import { inventory } from '../data/database.js';

export const filterByCategory = (category) => {
    return inventory.filter((item) => item.category === category);
};

export const hasOutOfStockProducts = () => {
    return inventory.some((item) => item.stock === 0);
};

export const getOffersByCategory = (category) => {
    return inventory
        .filter((item) => item.category === category)
        .map((item) => {
            return {
                product: item.product,
                originalPrice: item.price,
                salePrice: item.price * 0.80
            };
        });
};