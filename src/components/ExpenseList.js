import React, {useContext} from "react";
import { AppContext } from "../context/AppContext";
import ExpenseItem from "./ExpenseItem";


const ExpenseList = () => {
    const {expenses} = useContext(AppContext)

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Department</th>
                    <th scope="col">Allocated Budget</th>
                    <th scope="col">Increase By 10</th>
                    <th scope="col">Decrease By 10</th>
                    <th scope="col">Delete</th>
                    </tr>
                    
                </thead>
                <tbody>
                    {expenses.map((expense) => (
                        <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} key={expense.id} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ExpenseList;