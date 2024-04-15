import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from "moment";
import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { deleteToDoReducer } from '../redux/todosSlice';
import Checkbox from "./Checkbox";

export default function Todo({ id, text, isCompleted, isToday, hour }) {

  const [localHour, setLocalHour] = React.useState(new Date(hour));

  const listToDos = useSelector(state => state.toDos.toDos);
  const dispatch = useDispatch();

  const handleDeleteTodo = async () => {
    dispatch(deleteToDoReducer({ id }));
    try {
      await AsyncStorage.setItem('@ToDos', JSON.stringify(
        listToDos.filter(todo => todo.id !== id)
      ));
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Checkbox
          id={id}
          text={text}
          hour={hour}
          isCompleted={isCompleted}
          isToday={isToday}
        />
        <View>
          <Text
            style={
              isCompleted
                ? [
                  styles.text,
                  { textDecorationLine: "line-through", color: "#73737330" },
                ]
                : styles.text
            }
          >
            {text}
          </Text>
          <Text
            style={
              isCompleted
                ? [
                  styles.hour,
                  { textDecorationLine: "line-through", color: "#73737330" },
                ]
                : styles.hour
            }
          >
            {/* Formatear a hora */}
            {moment(localHour).format('LT')}
          </Text>
        </View>
      </View>

      <TouchableOpacity onPress={handleDeleteTodo}>
        <MaterialIcons name="delete-outline" size={24} color="#73737340" style={styles.delete} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 15,
    fontWeight: "500",
    color: "#737373",
  },
  time: {
    fontSize: 13,
    color: "#a3a3a3",
    fontWeight: "500",
  },
});
