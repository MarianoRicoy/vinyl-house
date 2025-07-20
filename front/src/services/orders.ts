"use server";

import { axiosApiBack } from "./utils";

export const postOrders = async (token: string, body: CreateOrderDto) => {
  try {
    const res = await axiosApiBack.post("/orders", body, {
      headers: {
        Authorization: token,
      },
    });

    if (!res.data) {
      console.warn("Order not created", res.data);
      return {
        message: "Order not created",
        error: res?.data || 'Ocurrió un error'
      };
    }

    return res.data;
  } catch (e) {
    if (e instanceof Error) {
      console.warn("Error creating order products", e?.message);

      return {
        message: "Order not created",
        error: e?.message || 'Ocurrió un error'
      };
    }
    return null;
  }
};
export const getUsersOrders = async (token: string) => {
  try {
    const res = await axiosApiBack.get('/users/orders',{
      headers: {
        Authorization: token,
      },
  });

    if (!res.data || !Array.isArray(res.data)) {
      console.warn('invalid orders data format', res.data)
      return [];
    }
    return res.data
  } catch (e) {
    if (e instanceof Error) {
      console.warn("error fetching orders list", e?.message)
    };

    return [];
  };

}

