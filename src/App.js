import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import VisitMe from "./components/VisitMe/VisitMe";

const DUMMY_DATA = [
  {
    id: '1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2019, 7, 14),
  },
  {
    id: '2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2020, 2, 12)
  },
  {
    id: '3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 8, 28),
  },
  {
    id: '4',
    title: 'New Desk',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: '5',
    title: 'iPhone',
    amount: 600,
    date: new Date(2021, 4, 12),
  },
  {
    id: '6',
    title: 'iPad',
    amount: 999,
    date: new Date(2019, 4, 12),
  },
];

const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_DATA);

  const addNewExpenseHandler = (myExpenseData) => {
    setExpenses(prevExpenses => {
      return [myExpenseData, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddNewExpense={addNewExpenseHandler} />
      <Expenses expenseItem={expenses} />
      <VisitMe />
    </div>
  );
};

export default App;
