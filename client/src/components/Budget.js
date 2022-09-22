import React, {useContext, useState} from 'react'
import { AppContext } from '../context/AppContext'
import EditBudget from './EditBudget';
import ViewBudget from './ViewBudget';

const Budget = () => {
    const { budget, dispatch } = useContext(AppContext);
    const [isEditing, setEditing ] = useState(false);

    const handleEditClick = () => {
      setEditing(true);
    };

    const handleSaveClick = (value) => {
      dispatch({
        type: 'SET_BUDGET',
        payload: value,
      });
      setEditing(false);
    };

  return (
    <div className='alert alert-secondary pt-1 d-flex align-items-center justify-content-center'>
      {isEditing ? (
				<EditBudget handleSaveClick={handleSaveClick} budget={budget} />
			) : (
				// For part 1 render component inline rather than create a seperate one
				<ViewBudget handleEditClick={handleEditClick} budget={budget} />
			)}
    </div>
  )
}

export default Budget