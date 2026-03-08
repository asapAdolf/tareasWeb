import {
    filterByCategory,
    hasOutOfStockProducts,
    getOffersByCategory
} from './services/inventoryManager.js';

console.log("--- ELECTRONICA ---");
const electronics = filterByCategory('Electronics');
console.log(electronics);

console.log("\n--- PRODUCTOS AGOTADOS? ---");
const hasOutOfStock = hasOutOfStockProducts();
console.log(hasOutOfStock ? "Sí, revisa el stock." : "No, todo está en orden.");

console.log("\n--- OFERTAS EN MUEBLES (20% OFF) ---");
const furnitureOffers = getOffersByCategory('Furniture');
console.log(furnitureOffers);