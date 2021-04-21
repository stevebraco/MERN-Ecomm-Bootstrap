import { 
  ADD_TO_CART, 
  REMOVE_FROM_CART,
  SET_PAGE_INDEX,
  GET_PRODUCTS_PENDING, 
  GET_PRODUCTS_SUCCESS, 
  GET_PRODUCTS_FAILURE,
  UPDATE_CART,
  CHECKOUT, 
  SET_DELIVERY_CHOICE
} from './actionTypes'

import {getProducts} from '../../service'


 const returnProductsArrays = (items) => { 
  let TwoDimensionalArray = []
  let remainder = items.length % 9
  let i = 0
  while (i < (items.length - remainder)) {
    let array = items.slice(i, i + 9)
    TwoDimensionalArray.push(array)
    i += 9 
  }
  const array = items.slice(i)
  TwoDimensionalArray.push(array)
  return TwoDimensionalArray
}

export function getProductsPending() { 
  return {
    type: GET_PRODUCTS_PENDING
  };
}
export function getProductsSuccess(data) { 
  return {
    type: GET_PRODUCTS_SUCCESS, 
     payload: { data }
  };
}
export function getProductsFailure(error) { 
 return {
    type: GET_PRODUCTS_FAILURE, 
     payload: { error }
  };
}
export function addToCart(product) {
  return {
    type: ADD_TO_CART,
    payload: { product }
  };
}
export function updateCart(id, quantity) { 
  return {
    type: UPDATE_CART,
    payload: { id, quantity }
  };
}
export function setDelivery(choice) { 
  return {
    type: SET_DELIVERY_CHOICE,
    payload: { choice }
  };
}
export function removeFromCart(id) {
  return {
    type: REMOVE_FROM_CART,
    payload: { id }
  };
}
export function checkout() { 
  return {
    type: CHECKOUT
  };
}
export function setPage(index) {
  return {
    type: SET_PAGE_INDEX,
    payload: { index }
  };
}

// Networking - MongoDB
export const fetchProducts = () => {
  return async function (dispatch) {
    dispatch(getProductsPending);
    getProducts()
    .then((data) => returnProductsArrays(data))
    .then(data => dispatch(getProductsSuccess(data)))
    .catch(err => dispatch(getProductsFailure(err)));
  }
}