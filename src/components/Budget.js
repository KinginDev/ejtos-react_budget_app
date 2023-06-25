import React from 'react';
import { AppContext } from '../context/AppContext';
import { useContext } from 'react';
const Budget = ()=> {
    const {expenses, budget, dispatch, currency} = useContext(AppContext)

    const handleBudgetChange = (event) => {
        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost)
        },0)

        
        const newBudget = event.target.value

        if(totalExpenses >= newBudget){
            return alert('You cannot reduce the budget value lower than the spending')
        }
        dispatch({type: "UPDATE_BUDGET", payload: newBudget})
    }
    return (
        <div className='alert alert-primary'>
        <span>Budget: </span>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">{currency.sign}</span>
                </div>
                <input className='form-control' type='number' value={budget} onChange={(event) =>handleBudgetChange(event)}/>
            </div>
            
        </div>
    )
}


export default Budget;