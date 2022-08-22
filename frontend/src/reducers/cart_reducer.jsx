const cart_reducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    const { id, color, amount, products } = action.payload;
    const tempItem = state.cart.find((item) => item.id === id + color);

    if (tempItem) {
    } else {
      const newItem = {
        id: id + color,
        name: products.name,
        color,
        amount,
        image: products.images[0].url,
        price: products.price,
        max: products.countInStock,
      };
      return { ...state, cart: [...state.cart, newItem] };
    }
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
