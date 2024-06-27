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

  addtoCart: async (user, product, size, dispatch) => {
    var cartObj = {
      userId: user?.userId,
      emailId: user?.emailId,
      cart: [{
        productId: product._id || product.productId,
        productName: product.productName,
        subCategory: product.subCategory,
        company: product.company,
        imageUrl: product.imageUrl,
        listPrice: product.listPrice,
        count: 1,
        size: size,
      }],
    };

    await axios.post(requests.addToCart, cartObj).then((res) => {
      console.log(res);
      dispatch(addCart(res.data.cart));
    });
  },

  bulkaddCart: async (user, cart, dispatch) => {
    var cartObj = {
      userId: user?.userId,
      emailId: user?.emailId,
      cart: cart,
    };

    await axios.post(requests.addToCart, cartObj).then((res) => {
      console.log(res);
      dispatch(addCart(res.data.cart));
      sessionStorage.removeItem("cart");
    });
  },

  addSessionCart: (product, size, dispatch) => {
    var cart = []
    var cartObj = {
      productId: product._id || product.productId,
      productName: product.productName,
      subCategory: product.subCategory,
      company: product.company,
      imageUrl: product.imageUrl,
      listPrice: product.listPrice,
      count: 1,
      size: size,
    };

    var sessCart = JSON.parse(sessionStorage.getItem("cart"));

    if (!sessCart) {
      cart.push(cartObj)
      sessionStorage.setItem("cart", JSON.stringify(cart));
    }

    if (sessCart) {
      sessCart.map((item, index) => {
        if ((item.productId === (product._id || product.productId))) {
          if (item.size === size) {
            sessCart[index].count += 1;
          }
          sessionStorage.setItem("cart", JSON.stringify(sessCart));
        } 
      })

      var item = sessCart.filter((value) => (value.productId === (product._id || product.productId)) && value.size === size)
      if (!item.length) {
        sessCart.push(cartObj);
        sessionStorage.setItem("cart", JSON.stringify(sessCart));
      }
    }
    dispatch(addCart(JSON.parse(sessionStorage.getItem("cart"))));
  },

  removeFromCart: async (user, product, dispatch) => {
    var cartObj = {
      userId: user,
      productId: product.productId,
      size: product.size,
    };
    await axios.post(requests.removeFromCart, cartObj).then((res) => {
      console.log(res);
      dispatch(removeCart(res.data?.cart));
    });
  },

  removeSessionCart: (product, dispatch) => {
    var sessCart = JSON.parse(sessionStorage.getItem("cart"));
    sessCart.map((item, index) => {
      if ((item?.productId === (product?._id || product?.productId))) {
        if (item.size === product?.size && item.count > 0) {
          sessCart[index].count -= 1;
        }
        sessionStorage.setItem("cart", JSON.stringify(sessCart));
      }
      if (item?.count === 0) {
        sessCart.splice(index, 1)
        sessionStorage.setItem("cart", JSON.stringify(sessCart));
      } 
    })
    if (!sessCart.length) {
      sessionStorage.removeItem("cart")
    }
    dispatch(removeCart(JSON.parse(sessionStorage.getItem("cart"))));
  },

  getCart: async (userId, dispatch) => {
    await axios.get(requests.fetchCart(userId)).then((res) => {
      // console.log(res);
      if (res.data?.cart) {
        dispatch(addCart(res.data.cart));
      }
    });
  },

  placeOrder: async (user, cart) => {
    const orderObj = {
      order: cart,
      success_url: window.location.href,
      cancel_url: window.location.href,
      emailId: user?.emailId,
      userId: user?.userId
    }
    await axios.post(requests.placeOrder(user?.userId), orderObj).then((res) => {
      console.log(res)
      if (res) {
        window.location.href = res.data.url
      }
    })
  },

  isProductInCart: (product, cart) => {
    return cart?.findIndex((item) => item.productId === (product._id || product.productId));
  },

  itemCountInCart: (product, cart) => {
    return cart[cart?.findIndex((item) => (item.productId === (product._id || product.productId)) && item.size === product.size)]
      ?.count;
  },

  getUserInitial: (username) => {
    return username?.substring(0,1).toUpperCase();
  }
};

export default utils;
