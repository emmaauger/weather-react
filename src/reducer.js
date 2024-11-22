const initialState = {
  units: [{ currentUnit: ["C", "F"] }],
  filters: {
    status: "All",
  },
};
export default function appReducer(state = initialState, action) {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    // Do something here based on the different types of actions
    case "updateUnit": {
      return {
        ...state,
        units: [
          ...state.units,
          {
            currentUnit: action.payload,
          },
        ],
      };
    }
    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state;
  }
}
