import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { add, fetchTodos, Todo } from "../store/todo-slice";

type Props = {};

export default function TodoDemo({}: Props) {
  const todoState = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch<AppDispatch>();

  const addTodo = () => {
    const newTodo: Todo = {
      id: Number(Math.random()) * 100,
      title: "a",
      completed: false,
    };

    dispatch(add(newTodo));
  };

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <div>
      <div>
        {todoState.loading ? (
          <h1>loading...</h1>
        ) : (
          <>
            {todoState.todos.map((item) => {
              return <div key={item.id}>{item.title}</div>;
            })}
          </>
        )}
      </div>
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
}
