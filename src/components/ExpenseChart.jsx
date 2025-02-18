import { useContext } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { ExpenseContext } from "../context/ExpenseContext";

const ExpenseChart = () => {
  const { expenses } = useContext(ExpenseContext);

  // Calculate total income and total expenses
  const totalIncome = expenses
    .filter((entry) => entry.type === "Income")
    .reduce((sum, entry) => sum + entry.amount, 0);

  const totalExpenses = expenses
    .filter((entry) => entry.type === "Expense")
    .reduce((sum, entry) => sum + entry.amount, 0);

  // Data for the chart
  const data = [
    { name: "Income", amount: totalIncome },
    { name: "Expenses", amount: totalExpenses },
  ];

  return (
    <div>
      <h3 className="my-4 text-black">Income vs. Expenses</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="amount" fill="#31511E" name="Amount ($)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExpenseChart;
