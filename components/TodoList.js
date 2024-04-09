import * as React from "react";
import { todosData } from "../data/todos";
import { FlatList, View, Text } from "react-native";
import Todo from "./ToDo";

export default function TodoList() {
  return (
    <FlatList
      data={todosData} // Lista de datos
      keyExtractor={(item) => item.id.toString()} // Id que usará la flat list para identificar
      renderItem={({ item }) => <Todo {...item} />} // renderItem: Como quiero renderizar los items, se pasan todas las propiedades al componente Todo
    />
  );
}
