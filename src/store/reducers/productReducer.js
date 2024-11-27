const initialState = {
  selectedColor: "#f0f0f0",
  selectedPurity: "14kt",
  ringSize: "10",
  cartCount: 0, // Initialize cart count
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_COLOR":
      return { ...state, selectedColor: action.payload };
    case "SET_PURITY":
      return { ...state, selectedPurity: action.payload };
    case "SET_RING_SIZE":
      return { ...state, ringSize: action.payload };
    case "INCREMENT_CART_COUNT": // Handle cart count increment
      return { ...state, cartCount: state.cartCount + 1 };
    default:
      return state;
  }
};

export default productReducer;