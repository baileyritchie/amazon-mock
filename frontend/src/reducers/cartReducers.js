import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_PAYMENT_METHOD, CART_SAVE_SHIPPING_ADDRESS } from "../constants/cartConstants";

export const cartReducer = (state = {cartItems:[]},action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const existItem = state.cartItems.find((p) => p.product === item.product);
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map(p => p.product === existItem.product ? item : p)
        }
      }
      else {
        return {...state, cartItems: [...state.cartItems,item]}
      }
    case CART_REMOVE_ITEM:
      const id = action.payload;
      return {...state, cartItems: state.cartItems.filter((item) => item.product !== id)};
    case CART_SAVE_SHIPPING_ADDRESS:
      return {...state, shippingAddress: action.payload};
    case CART_SAVE_PAYMENT_METHOD: 
      return {...state, paymentMethod: action.payload};
    default:
      return state;
  }

}