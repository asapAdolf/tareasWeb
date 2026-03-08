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

export const getProductsSortedByPrice = () => {
    return [...inventory].sort((a, b) => a.precio - b.precio);
};

export const printInventoryStatus = () => {
    inventory.forEach((item) => {
        console.log(`- ${item.producto}: ${item.stock} en stock (Categoría: ${item.categoria})`);
    });
};