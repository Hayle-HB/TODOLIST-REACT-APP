import { useState, useEffect, useRef } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');


  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  })

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.random() * 1000,
      text: input,
    });
    setInput('')
  };

  const handleChange = (e) => {
      setInput(e.target.value);
  } 

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      {props.edit ? (
        <>
          <input
            type="text"
            placeholder="Add a todo"
            value={input}
            name="text"
            className="todo-input edit"
            onChange={handleChange}
            ref={inputRef}
          />

          <button className="todo-button">Update Todo</button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Add a todo"
            value={input}
            name="text"
            className="todo-input add"
            onChange={handleChange}
            ref={inputRef}
          />

          <button className="todo-button">Add Todo</button>
        </>
      )}
    </form>
  );
};

export default TodoForm;
