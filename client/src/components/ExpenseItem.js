import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import  "../App.css";
import { AppContext } from "../context/AppContext";


const ExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {props.name}
      <div>
        <span className="cost">${props.cost}</span>
        <TiDelete
          size="1.5em"
          style={{ color: "red" }}
          onClick={handleDeleteExpense}
        />
      </div>
    </li>
  );
};

export default ExpenseItem;
