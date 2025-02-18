import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseChart from "./components/ExpenseChart";
import ExpensePieChart from "./components/ExpensePieChart"; // Import Pie Chart

function App() {
  const [entries, setEntries] = useState([]);

  const addEntry = (newEntry) => {
    setEntries([...entries, newEntry]);
  };

  const deleteEntry = (id) => {
    setEntries(entries.filter((entry) => entry.id !== id));
  };

  return (
    <div className="container mt-4 bg-white bg-opacity-75">
      <h1 className="text-center mb-4">Budget Tracker</h1>

      <div className="row">
        {/* Left Side: Form & List */}
        <div className="col-md-6">
          <ExpenseForm addEntry={addEntry} />
          <ExpenseList entries={entries} deleteEntry={deleteEntry} />
        </div>

        {/* Right Side: Charts */}
        <div className="col-md-6">
          <ExpenseChart entries={entries} /> {/* Pass entries as props */}
          <ExpensePieChart entries={entries} /> {/* Pass entries as props */}
        </div>
      </div>
    </div>
  );
}

export default App;

