import { addCart, removeCart, selectCart } from "./features/cartSlice";

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

  addtoCart: (user, product, dispatch, cart) => {
    const index = cart.findIndex((item) => item.productId === product._id);

    var productObj = {
      index: 0,
      productId: product._id,
      productName: product.productName,
      subCategory: product.subCategory,
      company: product.company,
      imageUrl: product.imageUrl,
      listPrice: product.listPrice,
      count: 0,
    };

    if (cart?.length === 0) {
      productObj.index = 0;
      productObj.count = 1;
      dispatch(addCart(productObj));
      console.log(productObj);
    }

    if (cart.length !== 0) {
      if (index === -1) {
        let newObj = Object.assign({}, productObj, { count: 1 });
        newObj = Object.assign({}, newObj, { index: cart?.length });
        // productObj.count = 1;
        dispatch(addCart(newObj));
        console.log(productObj);
      } else {
        let newObj = Object.assign({}, productObj, {
          count: cart[index].count + 1,
        });
        newObj = Object.assign({}, newObj, { index: index });
        // productObj.count = item.count + 1;
        dispatch(addCart(newObj));
        console.log(newObj);
      }
    }
    // if (cart?.length !== 0) {
    //   cart.map((item, i) => {
    //     if (item.productId !== product._id) {
    //       let newObj = Object.assign({}, productObj, { count: 1 });
    //       // productObj.count = 1;
    //       dispatch(addCart(newObj));
    //       console.log(productObj);
    //     } else if (item.productId === product._id && item.count > 1) {
    //       let newObj = Object.assign({}, productObj, { count: item.count + 1 });
    //       // productObj.count = item.count + 1;
    //       dispatch(addCart(newObj));
    //       console.log(newObj);
    //     }
    //   });
    // }
  },

  removeFromCart: (product, dispatch) => {
    dispatch(removeCart(product._id));
  },
};

export default utils;
