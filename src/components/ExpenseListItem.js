import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {removeExpense} from '../actions/expenses';

const ExpenseListItem= ({id,description,amount,createdAt}) => (<div>

    <Link to={`/edit/${id}`}>
    <h3>{description}</h3>
    </Link>
      <p>{amount} - {createdAt}</p>
</div> );


const mapsStateToProps =(state)=>{
    return {
      expenses:state.expenses  
    };
};

export default  connect() (ExpenseListItem);
