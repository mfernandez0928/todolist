export default function TodoList({ todos, deleteTodo }) {
  return (
    <ul>
      {todos.length === 0 ? (
        <li>No tasks yet!</li>
      ) : (
        todos.map((todo, idx) => (
          <li key={idx}>
            {todo}
            <button onClick={() => deleteTodo(idx)}>Delete</button>
          </li>
        ))
      )}
    </ul>
  );
}
