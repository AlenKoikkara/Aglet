import React, { useEffect, useMemo, useState } from "react";
import "./ProductWrapper.scss";
import axios from "../axios";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import utils from "../utils";
import { selectCart } from "../features/cartSlice";
import RemoveRounded from "@mui/icons-material/RemoveRounded";
import LoginDialog from "../common/LoginDialog";

function ProductWrapper({ title, fetchUrl, products, setProducts }) {
  const [pageNo, setPageNo] = useState(0);
  const [productCount, setProductCount] = useState(0);
  const page = useMemo(() => ({ pageNo }), [pageNo]);
  const [searchParams, setSearchParams] = useSearchParams();
  const user = useSelector(selectUser);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);

  const scroller = () => {
    const scrolledTo = window.scrollY + window.innerHeight;
    const isReachBottom =
      Math.round(scrolledTo) < document.body.scrollHeight - 200 &&
      Math.round(scrolledTo) > document.body.scrollHeight - 250;
    if (isReachBottom) {
      setPageNo(pageNo + 1);
    }
  };

  function addCart(shoe) {
    if (user) {
      utils.addtoCart(user.userId, shoe, dispatch, cart);
    } else {
      setOpen(true);
    }
  }

  function removeCart(shoe) {
    utils.removeFromCart(user.userId, shoe, dispatch);
  }

  async function fetchData(page) {
    const url = fetchUrl.concat(`&page=${page}`);
    await axios.get(url).then((request) => {
      setProducts([...products, ...request.data.products]);
      setProductCount(request.data.productCount);
      return request;
    });
  }

  useEffect(() => {
    if (searchParams?.get("category") && products.length <= productCount) {
      fetchData(pageNo);
    }
    window.addEventListener("scroll", scroller);
    return () => window.removeEventListener("scroll", scroller);
  }, [fetchUrl, page]);

  return (
    <div className="categoryWrapper">
      <div className="titleContent">
        <div className="title">{title}'s Shoes</div>
        <div className="filterOptions">
          <div className="hideFilter">HideFilter</div>
          <div className="sortByDropdown">Dropdown menu</div>
        </div>
      </div>
      <div className="content">
        {products && (
          <div className="productsList">
            {products?.map((product) => (
              <div key={product._id} className="productWrapper">
                <div className="imgCart">
                  <img
                    loading="lazy"
                    className="shoeimg"
                    src={product.imageUrl}
                    alt={product.producName}
                  ></img>
                  <div
                    className={`cartfunction ${
                      cart &&
                      (utils.isProductInCart(product, cart) > -1
                        ? "showcartfunction"
                        : "hidecartfunction")
                    }`}
                  >
                    <RemoveRounded
                      className="removeCart"
                      fontSize="medium"
                      onClick={() => removeCart(product)}
                    ></RemoveRounded>
                    <div className="totalItem">
                      {cart && utils.itemCountInCart(product, cart)}
                    </div>
                    <AddRoundedIcon
                      onClick={() => addCart(product)}
                      className="addCart"
                      fontSize="medium"
                    ></AddRoundedIcon>
                  </div>
                </div>
                <div className="shoedetails">
                  <div className="desc">
                    <div className="productname">{product.productName}</div>
                    <div className="division">{product.division}</div>
                  </div>
                  <div className="price">${product.listPrice}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div style={{ display: "none" }}>
        <LoginDialog open={open} setOpen={setOpen}></LoginDialog>
      </div>
    </div>
  );
}

export default ProductWrapper;
