import { v4 as uuidv4 } from "uuid";
import React, { createContext, useReducer } from "react";

// 5. The reduceer - this is used to update the state, based on the action
export const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case "DELETE_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload
        ),
      };
    case "SET_BUDGET":
      return {
        ...state,
        budget: action.payload,
      };
    default:
      return state;
  }
};
// 1. Sets the initial state when the app loads
const initialState = {
  budget: 6000,
  expenses: [
    { id: uuidv4(), name: "shopping", cost: 200 },
    { id: uuidv4(), name: "Holiday", cost: 100 },
    { id: uuidv4(), name: "Maintenance", cost: 40 },
    { id: uuidv4(), name: "fuel", cost: 40 },
    { id: uuidv4(), name: "rent", cost: 1200 },
    { id: uuidv4(), name: "food", cost: 100 },
    { id: uuidv4(), name: "entertainment", cost: 80 },
    { id: uuidv4(), name: "gym", cost: 30 },
  ],
};

// 2. Creates the context this is the thing our components import and use to get the state
export const AppContext = createContext();

// 3. Provider component - wraps the components we want to give access to the state
// Accepts the children, which are the nested(wrapped) components
export const AppProvider = (props) => {
  // 4. Sets up the app state. takes a reducer, and an initial state
  const [state, dispatch] = useReducer(AppReducer, initialState);
  // 5. Returns our context. Pass in the values we want to expose
  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
