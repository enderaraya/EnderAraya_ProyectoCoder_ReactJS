export const fetchProductsByCategory = async (categoryId) => {
    const products = [];

    for (let i = 1; i <= 5; i++) {
        products.push({
            id: `${categoryId}-${i}`,
            name: `Producto ${i}`,
            category: categoryId,
            price: Math.floor(Math.random() * 100) + 1, // Precio aleatorio entre 1 y 100
            
        });
    }

    console.log(`Productos de la categoría ${categoryId}:`, products);
    return products;
};
