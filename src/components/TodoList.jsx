export default function TodoList({
  todos,
  deleteTodo,
  startEdit,
  editId,
  editValue,
  setEditValue,
  saveEdit,
  cancelEdit,
}) {
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
              {editId === idx ? (
                <div className="flex gap-2 flex-1">
                  <input
                    type="text"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    className="flex-1 px-3 py-2 border-2 border-blue-500 rounded focus:outline-none"
                    autoFocus
                  />
                  <button
                    onClick={() => saveEdit(idx)}
                    className="px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
                  >
                    Save
                  </button>
                  <button
                    onClick={cancelEdit}
                    className="px-3 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <>
                  <span className="text-gray-800">{todo}</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => startEdit(idx, todo)}
                      className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteTodo(idx)}
                      className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
