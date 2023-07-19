"use client";

import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cart:
    typeof window !== "undefined"
      ? localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : []
      : undefined,
  totalPrice: 0,
  totalCount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      const index = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (index >= 0) {
        {
          state.cart[index].count <= 5 ? (state.cart[index].count += 1) : null;
        }
        {
          state.cart[index].count <= 5
            ? toast.info("quantity increased", {
                position: "top-center",
                autoClose: 800,
              })
            : toast.error("limit reached", {
                position: "top-center",
                autoClose: 800,
              });
        }
      } else {
        const modifiedCart = { ...action.payload, count: 1 };
        state.cart.push(modifiedCart);
        toast.success(`${action.payload.name} added to cart`, {
          position: "top-center",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },

    plus: (state, action) => {
      const index = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cart[index].count >= 1 && state.cart[index].count <= 5) {
        state.cart[index].count += 1;
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },

    minus: (state, action) => {
      const index = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cart[index].count > 1) {
        state.cart[index].count -= 1;
      } else if ((state.cart[index].count = 1)) {
        const filteredCart = state.cart.filter(
          (item) => item.id !== action.payload.id
        );

        state.cart = filteredCart;
        toast.error(`${action.payload.name} removed from cart`, {
          position: "top-center",
        });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },

    remove: (state, action) => {
      const filteredCart = state.cart.filter(
        (item) => item.id !== action.payload.id
      );

      state.cart = filteredCart;

      toast.error(`${action.payload.name} removed from cart`, {
        position: "top-center",
      });

      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },

    totals: (state) => {
      let { totalPrice, qty } = state.cart.reduce(
        (total, item) => {
          const { price, count } = item;
          const finalTotal = price.replace(",", "") * count;

          total.totalPrice += finalTotal;
          total.qty += count;

          return total;
        },
        {
          totalPrice: 0,
          qty: 0,
        }
      );

      state.totalPrice = totalPrice;
      state.totalCount = qty;
    },
  },
});

export const { add, plus, minus, remove, totals } = cartSlice.actions;

export default cartSlice.reducer;
