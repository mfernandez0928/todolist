import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "./index.css";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState("");

  const addTodo = (text) => setTodos([...todos, text]);

  const deleteTodo = (idx) => setTodos(todos.filter((_, i) => i !== idx));

  const startEdit = (idx, text) => {
    setEditId(idx);
    setEditValue(text);
  };

  const saveEdit = (idx) => {
    if (!editValue.trim()) return;
    const updatedTodos = [...todos];
    updatedTodos[idx] = editValue;
    setTodos(updatedTodos);
    setEditId(null);
    setEditValue("");
  };

  const cancelEdit = () => {
    setEditId(null);
    setEditValue("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2 text-center">
            My To-Do List
          </h1>
          <p className="text-gray-500 mb-6 text-center">
            Stay organized and track your tasks
          </p>

          <TodoInput addTodo={addTodo} />
          <TodoList
            todos={todos}
            deleteTodo={deleteTodo}
            startEdit={startEdit}
            editId={editId}
            editValue={editValue}
            setEditValue={setEditValue}
            saveEdit={saveEdit}
            cancelEdit={cancelEdit}
          />

          {todos.length > 0 && (
            <p className="text-center text-gray-500 mt-6 text-sm">
              You have{" "}
              <span className="font-bold text-blue-600">{todos.length}</span>{" "}
              task{todos.length !== 1 ? "s" : ""}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
