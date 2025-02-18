import { useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';

const ExpenseList = () => {
  const { expenses, deleteExpense, resetExpenses } = useContext(ExpenseContext);

  return (
    <div>
      <h3 className="my-4">Transactions List</h3>
      {expenses.length === 0 ? (
        <p>No Transactions added yet!</p>
      ) : (
        <ul className="list-group">
          {expenses.map((entry) => (
            <li
              key={entry.id}
              className="list-group-item d-flex justify-content-between align-items-center"
              style={{ color: entry.type === "Income" ? "green" : "red" }}
            >
              <div>
                <h5>{entry.description}</h5>
                <p>
                  ${entry.amount} ({entry.type}
                  {entry.type === "Expense" ? ` - ${entry.category}` : ""})
                </p>
              </div>
              <button
                className="btn btn-danger"
                onClick={() => deleteExpense(entry.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
      <button
        className="btn btn-danger mt-4"
        onClick={resetExpenses} // Call reset function
        disabled={expenses.length === 0}
      >
        Reset All
      </button>
    </div>
  );
};

export default ExpenseList;

  