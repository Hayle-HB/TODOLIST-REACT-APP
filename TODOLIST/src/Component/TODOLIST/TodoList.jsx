import { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import TypeWriter from "typewriter-effect";
const TodoList = () => {



  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodos((prev) =>
      prev.map((item) => (item.id == todoId ? newValue : item))
    );
  };

  const completeTodo = (id) => {
    let updateTodo = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });

    setTodos(updateTodo);
  };
  return (
    <div>
      <h1 >
        <TypeWriter
          options={{
            autoStart:true,
            loop: true,
            delay: 50,
            strings: ["what's your plan for Today!"],
          }}
        />
      </h1>

      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
};

export default TodoList;
