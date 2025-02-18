import { useContext } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { ExpenseContext } from "../context/ExpenseContext";

const COLORS = ["#4B164C", "#3a34ad", "#377d51", "#d1821b", "#e35a17", "#b53635"];

const ExpensePieChart = () => {
  const { expenses } = useContext(ExpenseContext);

  // Filter only expenses
  const expenseData = expenses.filter((entry) => entry.type === "Expense");

  // Aggregate expenses by category
  const categoryTotals = expenseData.reduce((acc, entry) => {
    acc[entry.category] = (acc[entry.category] || 0) + entry.amount;
    return acc;
  }, {});

  // Convert to array format for the chart
  const data = Object.keys(categoryTotals).map((category, index) => ({
    name: category,
    value: categoryTotals[category],
    color: COLORS[index % COLORS.length], // Assign colors dynamically
  }));

  return (
    <div>
      <h3 className="my-4">Expense Breakdown</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" outerRadius={100}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExpensePieChart;
