import React, {useContext} from "react";    
import { AppContext } from "../context/AppContext";
import { FaTimesCircle, FaPlusCircle,FaMinusCircle } from 'react-icons/fa';


const ExpenseItem = (props) => {
    const {dispatch, currency} = useContext(AppContext)

    //dispatch an action so the reducer (AppContext) can act
    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id
        })
    }

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10
        }

        //dispatch an action so the reducer (AppContext) can act
        dispatch({
            type : "ADD_EXPENSE",
            payload: expense,
        })
    }

    const decreaseAllocation = (name) => {
        const expense = {
            name,
            cose: -10
        }

        dispatch({
            type: "DECREASE_EXPENSE",
            payload :expense
        })
    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency.sign}{props.cost}</td>
            <td><FaPlusCircle size="1.5em" color="green" onClick={event => increaseAllocation(props.name)}>+</FaPlusCircle></td>
            <td><FaMinusCircle size="1.5rem" color="red" onClick={event => decreaseAllocation(props.name)}/></td>
            <td><FaTimesCircle size='1.5em' color="grey" onClick={handleDeleteExpense}>-</FaTimesCircle></td>
        </tr>

    )

}

export default ExpenseItem;