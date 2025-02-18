import { createContext, useState, useEffect } from 'react'

export const ExpenseContext = createContext();

 export const ExpenseProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const storedExpenses = JSON.parse(localStorage.getItem('expenses'));
    if(storedExpenses) {
      setExpenses(storedExpenses);
    }
  }, []);

  useEffect (() =>{
    localStorage.setItem('expenses', JSON.stringify(expenses))
  }, [expenses]);
 

 const addExpense = (expense) => {
  setExpenses((prevExpenses) => [...prevExpenses, expense]);
 };

 const deleteExpense = (id) => {
  setExpenses((prevExpenses) =>
  prevExpenses.filter((expense) => expense.id !== id)
  );
 };

 const resetExpenses = () => {
  setExpenses([]);
  localStorage.removeItem('expenses'); // Clear from localStorage
};
 return(
  <ExpenseContext.Provider value={{ expenses, addExpense, deleteExpense, resetExpenses }}>
    {children}
  </ExpenseContext.Provider>
 );
};
