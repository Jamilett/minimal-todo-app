import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todosSlice";

export const store = configureStore({
    reducer: {
        toDos: todosReducer,
    }
});

/** El store en Redux es un objeto que contiene el estado global de la aplicación. 
 * Es el único lugar donde reside el estado de toda la aplicación, y proporciona métodos para acceder y modificar este estado. 
 * El store permite que los componentes de la aplicación se suscriban a cambios en el estado, 
 * de modo que puedan actualizar su interfaz de usuario en consecuencia. */