import { create } from 'zustand';

const useMenuStore = create(set => ({
  items: [],
  totalPrice: 0, // Initialize total price
  addMeal: meal => set(state => {
    const itemIndex = state.items.findIndex(item => item.name === meal.name);
    if (itemIndex !== -1) {
      const newItems = [...state.items];
      newItems[itemIndex].count += 1;
      const newTotalPrice = state.totalPrice + parseFloat(meal.price); // Update total price
      return { items: newItems, totalPrice: roundToTwoDecimals(newTotalPrice) };
    } else {
      const newItems = [...state.items, { ...meal, count: 1 }];
      const newTotalPrice = state.totalPrice + parseFloat(meal.price); // Update total price
      return { items: newItems, totalPrice: roundToTwoDecimals(newTotalPrice) };
    }
  }),
  removeMeal: meal => set(state => {
    const itemIndex = state.items.findIndex(item => item.name === meal.name);
    if (itemIndex !== -1) {
      const newItems = [...state.items];
      newItems[itemIndex].count -= 1;

      // If the count is now 0, remove the meal from the cart
      if (newItems[itemIndex].count === 0) {
        newItems.splice(itemIndex, 1);
      }

      const newTotalPrice = state.totalPrice - parseFloat(meal.price); // Update total price
      return { items: newItems, totalPrice: roundToTwoDecimals(newTotalPrice) };
    }

    // If the meal is not in the cart, return the current state
    return state;
  }),
}));

export default useMenuStore;

// Function to round to two decimal places
function roundToTwoDecimals(value) {
  return Math.round((value + Number.EPSILON) * 100) / 100;
}
