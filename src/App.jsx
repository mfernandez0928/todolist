import { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase";
import LoginPage from "./components/LoginPage";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "./index.css";

export default function App() {
  const [user, setUser] = useState(null);
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // Check if user is logged in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        // Load todos from localStorage for this user
        try {
          const savedTodos = localStorage.getItem(`todos_${currentUser.uid}`);
          if (savedTodos) {
            setTodos(JSON.parse(savedTodos));
          }
        } catch (error) {
          console.error("Error loading todos:", error);
        }
      } else {
        setUser(null);
        setTodos([]);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Save todos to localStorage whenever they change
  useEffect(() => {
    if (user && !isLoading) {
      try {
        localStorage.setItem(`todos_${user.uid}`, JSON.stringify(todos));
      } catch (error) {
        console.error("Error saving todos:", error);
      }
    }
  }, [todos, user, isLoading]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setTodos([]);
      setUser(null);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const addTodo = (text) => {
    setTodos([...todos, text]);
  };

  const deleteTodo = (idx) => {
    setTodos(todos.filter((_, i) => i !== idx));
  };

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

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  if (!user) {
    return <LoginPage onLogin={() => {}} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* User Info and Logout */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              {user.photoURL && (
                <img
                  src={user.photoURL}
                  alt="Profile"
                  className="w-10 h-10 rounded-full"
                />
              )}
              <div>
                <p className="font-semibold text-gray-800">
                  {user.displayName}
                </p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>

          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            My To-Do List
          </h1>
          <p className="text-gray-500 mb-6">
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
