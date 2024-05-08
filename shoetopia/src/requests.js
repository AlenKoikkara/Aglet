const requests = {
  fetchProducts: (value) => `api/products?${value}`,
  fetchFeatured: `api/products/featured`
}


export default requests;