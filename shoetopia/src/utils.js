import { addCart, removeCart } from "./features/cartSlice";
import axios from "./axios";
import requests from "./requests";

const utils = {
  isMobile: () => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      return true;
    }
    return false;
  },

  getQueryParams: (query = null) => {
    return (query || window.location.search.replace("?", ""))
      .split("&")
      .map((pair) => {
        let [key, val] = pair.split("=");

        return [key, decodeURIComponent(val || "")];
      })
      .reduce((result, [key, val]) => {
        result[key] = val;
        return result;
      }, {});
  },

  getUrlWithParams: (url, qParams) => {
    Object.entries(qParams).forEach(([k, v], i) => {
      url +=
        k.concat("=", v) + (i !== Object.keys(qParams).length - 1 ? "&" : "");
    });
    return url;
  },

  addtoCart: async (user, product, dispatch) => {
    var cartObj = {
      userId: user,
      cart: {
        productId: product._id,
        productName: product.productName,
        subCategory: product.subCategory,
        company: product.company,
        imageUrl: product.imageUrl,
        listPrice: product.listPrice,
        count: 1,
      },
    };

    await axios.post(requests.addToCart, cartObj).then((res) => {
      console.log(res);
      dispatch(addCart(res.data.cart));
    });
  },

  removeFromCart: async (user, product, dispatch) => {
    var cartObj = {
      userId: user,
      productId: product._id,
    };
    await axios.post(requests.removeFromCart, cartObj).then((res) => {
      console.log(res);
      dispatch(removeCart(res.data?.cart));
    });
  },

  getCart: async (userId, dispatch) => {
    await axios.get(requests.fetchCart(userId)).then((res) => {
      console.log(res);
      if (res.data?.cart) {
        dispatch(removeCart(res.data?.cart));
      }
    });
  },

  isProductInCart: (product, cart) => {
    return cart?.findIndex((item) => item.productId === product._id);
  },

  itemCountInCart: (product, cart) => {
    return cart[cart?.findIndex((item) => item.productId === product._id)]
      ?.count;
  },
};

export default utils;
