import { FiEdit2, FiTrash2, FiCheck, FiX } from "react-icons/fi";

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
                    className="p-2 text-green-500 hover:bg-green-100 rounded transition"
                    title="Save"
                  >
                    <FiCheck size={20} />
                  </button>
                  <button
                    onClick={cancelEdit}
                    className="p-2 text-gray-500 hover:bg-gray-200 rounded transition"
                    title="Cancel"
                  >
                    <FiX size={20} />
                  </button>
                </div>
              ) : (
                <>
                  <span className="text-gray-800">{todo}</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => startEdit(idx, todo)}
                      className="p-2 text-yellow-500 hover:bg-yellow-100 rounded transition"
                      title="Edit"
                    >
                      <FiEdit2 size={20} />
                    </button>
                    <button
                      onClick={() => deleteTodo(idx)}
                      className="p-2 text-red-500 hover:bg-red-100 rounded transition"
                      title="Delete"
                    >
                      <FiTrash2 size={20} />
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
