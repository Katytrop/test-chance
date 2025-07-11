import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.find(p => p.id === action.payload.id);
      console.log(action.payload);
      
      if (!existingProduct) {
        state.push({ ...action.payload, quantityInCart: 1 });
      } else {
        if (existingProduct.quantityInCart < action.payload.quantity) {
          existingProduct.quantityInCart += 1;
        }
      }
    },
    removeFromCart: (state, action) => {
      return state.filter(p => p.id !== action.payload);
    },
    incrementQuantity: (state, action) => {
      const product = state.find(p => p.id === action.payload);
          if (product && product.quantityInCart < product.quantity) {
        product.quantityInCart += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const productIndex = state.findIndex(p => p.id === action.payload);
      if (productIndex !== -1) {
        const product = state[productIndex];
        product.quantityInCart -= 1;

        if (product.quantityInCart <= 0) {
          state.splice(productIndex, 1); 
        }
      }
    },
  },
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;