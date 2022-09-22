import React from 'react';

const ViewBudget = (props) => {
	return (
		<div className='d-flex ' >
			<span className=' d-flex align-item-center justify-content-center pt-2'>Budget: ${props.budget}</span>
			<button type='button' class='btn btn-primary mt-1' style={{ marginLeft: "10px", fontSize: "12px"}} onClick={props.handleEditClick}>
				Edit
			</button>
		</div>
	);
};

export default ViewBudget;