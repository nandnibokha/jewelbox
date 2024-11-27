const initialState = {
    cartCount: 0,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT_CART_COUNT":
            return {
                ...state,
                cartCount: state.cartCount + 1,
            };
        default:
            return state;
    }
};

export default cartReducer;