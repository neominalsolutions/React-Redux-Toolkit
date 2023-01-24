import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

// asenkron olarak apiden çekilecek olan çağrı
// actionType todos/getAllTodos
export const fetchTodos = createAsyncThunk("todos/getAllTodos", async () => {
  console.log("fetchTodos");

  return await (
    await axios.get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
  ).data;
});

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface TodoState {
  todos: Todo[];
  loading: boolean;
  error: string;
}

const initialState: TodoState = {
  todos: [],
  loading: false,
  error: "",
};

const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    add: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
  }, // asenkron olarak apidan veri çektiğimiz durumlarda extrareducers kullanırız
  extraReducers: (builder) => {
    // fetchTodos.pending apidan veri çekilkme aşaması
    builder.addCase(fetchTodos.pending, (state) => {
      state.loading = true;
    });

    // fetchTodos.fulfilled apidan veri çekildi problem yok
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      console.log("fulfilled", state, action);
      state.loading = false;
      state.todos = action.payload;
      state.error = "";
    });

    // fetchTodos.fulfilled apidan veri ççekilemedi rejected oldu
    builder.addCase(fetchTodos.rejected, (state, action) => {
      state.loading = false;
      state.todos = [];
      state.error = "";
    });
  },
});

export const { add } = todoSlice.actions;

export default todoSlice.reducer;
