import { Entypo } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { updateToDoReducer } from '../redux/todosSlice';

export default function Checkbox({ id, isCompleted, isToday, text, hour }) {

  const dispatch = useDispatch();

  const listToDos = useSelector(state => state.toDos.toDos);
  const handleCheckBox = () => {
    try {
      dispatch(updateToDoReducer({ id, isCompleted })); // Se ejecuta la acción
      AsyncStorage.setItem("@ToDos", JSON.stringify(
        // Se setearán solo los cambios de la tarea seleccionada
        listToDos.map(toDo => {
          if (toDo.id === id) {
            return {
              ...toDo,
              isCompleted: !toDo.isCompleted
            }
          }
          return toDo;
        }
        )
      ));
      console.warn('isCompleted saved');
    } catch (e) {
      console.error(e);
    }
  }

  return isToday ? (
    <TouchableOpacity onPress={handleCheckBox} style={isCompleted ? style.checked : style.unChecked}>
      {isCompleted && <Entypo name="check" size={16} color="#FAFAFA" />}
    </TouchableOpacity>
  ) : (
    <View style={style.isToday} />
  );

}

// Estilos dependiendo el estado del check
const style = StyleSheet.create({
  checked: {
    width: 20,
    height: 20,
    marginRight: 13,
    borderRadius: 6,
    backgroundColor: "#262626",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  unChecked: {
    width: 20,
    height: 20,
    marginRight: 13,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: "#E8E8E8",
    backgroundColor: "#fff",
    marginLeft: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  isToday: {
    width: 10,
    height: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "#262626",
    marginRight: 13,
    marginLeft: 15,
  },
});
