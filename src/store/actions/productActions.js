export const setColor = (color) => {
  return { type: "SET_COLOR", payload: color };
};

export const setPurity = (purity) => {
  return { type: "SET_PURITY", payload: purity };
};

export const setRingSize = (size) => {
  return { type: "SET_RING_SIZE", payload: size };
};

export const incrementCartCount = () => {
  return { type: "INCREMENT_CART_COUNT" };
};