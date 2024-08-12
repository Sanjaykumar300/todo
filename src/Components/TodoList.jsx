import TodoCard from "./TodoCard";
import PropTypes from "prop-types";

function TodoList(props) {
  const { todos, handleDeleteTodo, handleEditTodo } = props;

  return (
    <ul className="main">
      {todos.map((todo, todoIndex) => (
        <TodoCard
          key={todoIndex}
          index={todoIndex}
          handleDeleteTodo={handleDeleteTodo}
          handleEditTodo={handleEditTodo}
        >
          <p>{todo}</p>
        </TodoCard>
      ))}
    </ul>
  );
}

export default TodoList;

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  handleDeleteTodo: PropTypes.func.isRequired,
  handleEditTodo: PropTypes.func.isRequired,
};
