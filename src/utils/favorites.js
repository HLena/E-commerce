const favoriteProduct = (productId, products) => {
    return products.find(product => product.productId == productId);
}

export {
    favoriteProduct
}