import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toDos: []
}

export const toDosSlice = createSlice({
  name: 'toDos',
  initialState,
  reducers: { // funciones que manejarán los datos del estado
    setToDosReducer: (state, action) => { // state = initialState o estado actual
      state.toDos = action.payload;
      console.log(state.toDos);
    },
    addToDoReducer: (state, action) => {
      state.toDos.push(action.payload);
    },
    hideCompletedReducer: (state) => {
      state.toDos = state.toDos.filter(toDo => !toDo.isCompleted)
    },
    updateToDoReducer: (state, action) => { // Marcar o desmarcar como completado
      state.toDos = state.toDos.map(toDo => {
        if (toDo.id === action.payload.id) { // Revisar por id de la tarea
          toDo.isCompleted = !toDo.isCompleted;
        }
        return toDo;
      })
    },
    deleteToDoReducer: (state, action) => {
      const { id } = action.payload;
      state.toDos = state.toDos.filter(toDo => toDo.id !== id);
    }
  }
});

export const { setToDosReducer, addToDoReducer, updateToDoReducer, hideCompletedReducer, deleteToDoReducer } = toDosSlice.actions;

export default toDosSlice.reducer;

/**
 * Un slice en Redux se refiere a una porción del estado de la aplicación que está relacionada con una parte específica 
 * de la funcionalidad o una característica particular. 
 * Los slices se utilizan para dividir el estado global en partes más pequeñas y manejables. 
 * Cada slice tiene su propio conjunto de acciones y reductores que se encargan de actualizar ese segmento específico del estado. 
 * Esto ayuda a mantener la lógica de manejo del estado modular y fácil de entender.
 */
