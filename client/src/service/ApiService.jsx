import axios from "axios";
import { API_BASE_URL } from "./Constant";

export const userSignUp = async (payload) => {
  try {
    const data = await axios.post(`${API_BASE_URL}/user/signup`, payload);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const loginUser = async (payload) => {
  try {
    const data = await axios.post(`${API_BASE_URL}/user/login`, payload);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const resturantSignUp = async (payload) => {
  try {
    const data = await axios.post(`${API_BASE_URL}/resturant/signup`, payload);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const loginResturant = async (payload) => {
  try {
    const data = await axios.post(`${API_BASE_URL}/resturant/login`, payload);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const resturantsList = async (search) => {
  try {
    const data = await axios.get(
      `${API_BASE_URL}/user/resturant?search=${search}`
    );
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const createOffer = async (payload) => {
  try {
    const data = await axios.post(`${API_BASE_URL}/offer`, payload);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const offerListByRest = async (id) => {
  try {
    const data = await axios.get(`${API_BASE_URL}/offer/${id}`);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
export const offerDeleteRest = async (id) => {
  try {
    const data = await axios.delete(`${API_BASE_URL}/offer/${id}`);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
export const updateOffer = async (id, payload) => {
  try {
    const data = await axios.patch(`${API_BASE_URL}/offer/${id}`, payload);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getOffer = async (id) => {
  try {
    const data = await axios.get(`${API_BASE_URL}/offer/single/${id}`);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getOfferDetails = async (id) => {
  try {
    const data = await axios.get(`${API_BASE_URL}/offer/details/${id}`);
    return data;
  } catch (error) {
    return error;
  }
};

export const addToCart = async (payload) => {
  try {
    const data = await axios.post(`${API_BASE_URL}/cart`, payload);
    return data;
  } catch (error) {
    return error.response;
  }
};

export const checkoutApi = async (payload) => {
  try {
    return await axios.post(`${API_BASE_URL}/cart/checkout`, payload);
  } catch (error) {
    return error.response;
  }
};

export const getCartList = async (userId) => {
  try {
    const data = await axios.get(`${API_BASE_URL}/cart/${userId}`);
    return data;
  } catch (error) {
    return error;
  }
};

export const deleteCartItem = async (itemId) => {
  try {
    const data = await axios.delete(`${API_BASE_URL}/cart/${itemId}`);
    return data;
  } catch (error) {
    return error;
  }
};

export const removeFromCart = async (payload) => {
  try {
    const data = await axios.post(
      `${API_BASE_URL}/cart/remove-from-cart`,
      payload
    );
    return data;
  } catch (error) {
    return error;
  }
};
