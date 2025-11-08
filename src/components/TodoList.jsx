export default function TodoList({ todos, deleteTodo }) {
  return (
    <div>
      {todos.length === 0 ? (
        <p className="text-center text-gray-400 py-8">
          No tasks yet! Add one to get started. 🎯
        </p>
      ) : (
        <ul className="space-y-2">
          {todos.map((todo, idx) => (
            <li
              key={idx}
              className="flex items-center justify-between bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500 hover:shadow-md transition"
            >
              <span className="text-gray-800">{todo}</span>
              <button
                onClick={() => deleteTodo(idx)}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
