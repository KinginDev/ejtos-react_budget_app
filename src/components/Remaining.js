import React  , {useContext} from 'react'
import { AppContext } from '../context/AppContext'

const Remaining = () => {

    //get expense and budget state ppty from the AppContext reducer
    const {expenses, budget,currency} = useContext(AppContext)
    
    //use the js reduce function to get the total of all costs

    const totalExpenses = expenses.reduce((total,item) => {
        return (total = total +item.cost)
    },0)

    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';
    return (
        <div className={`alert ${alertType}`}>
          <span>  Remaining: {currency.sign}{budget - totalExpenses}</span>
        </div>
    )

}

export default Remaining;