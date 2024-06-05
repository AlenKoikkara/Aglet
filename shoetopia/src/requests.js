
const requests = {
  fetchProducts: (value) => `api/products?${value}`,
  fetchProduct: (value) => `api/products/${value}`,
  fetchFeatured: `api/products/featured`,
  fetchPaginated: `api/products/paginated`,
  fetchUser: (userId) => `api/user/${userId}`,
  addUser: (userId) => `api/user/add/${userId}`,
  addToCart: 'api/cart/add',
  removeFromCart: 'api/cart/remove',
  fetchCart: (userId) => `api/cart/fetch/${userId}`,
}

export default requests;