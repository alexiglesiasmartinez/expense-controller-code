import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false);

    const getExpenseData = (myExpenseData) => {
        var d = new Date();
        var key = parseInt(d.getSeconds());

        const expenseData = {
            ...myExpenseData,
            id: key
        };

        console.log(key);

        props.onAddNewExpense(expenseData);
        console.log(myExpenseData);

        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };

    return (
        <div className="new-expense">
            {!isEditing &&
                <button onClick={startEditingHandler}>Add new expense</button>
            }

            {isEditing &&
                <ExpenseForm
                    onGetExpenseData={getExpenseData}
                    onCancel={stopEditingHandler}
                />
            }
        </div>
    );
};

export default NewExpense;