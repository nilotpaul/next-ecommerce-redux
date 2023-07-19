"use client";

import { minus, plus, total } from "@/Redux/CartSlice";
import { useSelector, useDispatch } from "react-redux";

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import "../styles/itemsQty.scss";

export default function ItemsQty({ items, cartCount }) {
  const currCartState = useSelector((state) => state.cartSlice);
  const count = useSelector((state) => state.cartSlice.totalCount);
  const dispatch = useDispatch();

  const plusQty = (items) => {
    dispatch(plus(items));
  };

  const minusQty = (items) => {
    dispatch(minus(items));
  };

  const check = currCartState.cart?.find((elem) => elem.id === items.id);

  return (
    <>
      {check ? (
        <div className="item_btns">
          <button id="minus_btn" onClick={() => minusQty(items)}>
            <AiOutlineMinus id="minus_ico" />
          </button>
          {cartCount}
          <button id="plus_btn" onClick={() => plusQty(items)}>
            <AiOutlinePlus id="plus_ico" />
          </button>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
