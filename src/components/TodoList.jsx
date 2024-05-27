import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (inputValue === "") {
      alert("Please enter a task");
      return;
    }
    setTodos([...todos, inputValue]);
    setInputValue("");
  }

  function handleDelete(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }
  return (
    <div>
      <table>
        <tr>
          <td>
            <form>
              <td>
                <input
                  type="text"
                  autoFocus
                  placeholder="Enter Task"
                  value={inputValue}
                  onChange={handleChange}
                />
              </td>
              <td>
                <button onClick={handleSubmit}>Add Todo</button>
              </td>
            </form>
          </td>
        </tr>

        <ol>
              {todos.map((todo, index) => (
                <tr>
                    <td>
                        <li key={index}>{todo}</li></td>
                        <td><button onClick={() => handleDelete(index)}>Delete</button></td>
                </tr>
              ))}  
        </ol>
      </table>
    </div>
  );
};

export default TodoList;
