import { useState, useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';
import { HiSwitchHorizontal } from "react-icons/hi";


const ExpenseForm = () => {
  const { addExpense } = useContext(ExpenseContext); // Use addExpense from context

  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Housing');
  const [isIncome, setIsIncome] = useState(true);

  const categories = ["Housing", "Food", "Transportation", "Utilities", "Entertainment", "Other"];

  const toggleType = () => {
    setIsIncome(!isIncome);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount.trim() === "" || description.trim() === "") return;

    const newEntry = {
      id: Date.now(),
      description,
      amount: parseFloat(amount),
      type: isIncome ? "Income" : "Expense",
      category: isIncome ? "" : category, // Only set category for expenses
    };

    addExpense(newEntry); // Use context function to update state
    setAmount("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <button className="btn btn-outline-primary" type="button" onClick={toggleType}>
        <HiSwitchHorizontal />
        {isIncome ? "Switch to Expense" : "Switch to Income"}
      </button>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="$ Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      {!isIncome && (
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      )}
      <button className='btn btn-outline-success' type="submit">Add {isIncome ? "Income" : "Expense"}</button>
    </form>
  );
};

export default ExpenseForm;
