import * as React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import TodoList from "../components/TodoList";
import { todosData } from "../data/todos";

export default function Home() {

  const imgURL = 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png';

  const [sortedData, setSortedData] = React.useState(
    todosData.sort((a, b) => a.isCompleted - b.isCompleted) // Ordenar primero por los completados
  );

  const [isHidden, setIsHidden] = React.useState(false); // Mostar/Ocultar completados
  const handleHidePress = () => {
    if (isHidden) {
      setIsHidden(false);
      setSortedData(todosData.sort((a, b) => a.isCompleted - b.isCompleted));
      return;
    }
    setIsHidden(!isHidden);
    setSortedData(sortedData.filter(({ isCompleted }) => !isCompleted));
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: imgURL }} style={styles.img} />
      <View style={styles.todayContainer}>
        <Text style={styles.title}> Today </Text>
        <TouchableOpacity onPress={handleHidePress}>
          <Text style={{ color: '#3478f6' }}> {isHidden ? 'Show completed' : 'Hide completed'} </Text>
        </TouchableOpacity>
      </View>
      <TodoList todosData={sortedData.filter(({ isToday }) => isToday)} />

      <Text style={styles.title}> Tomorrow </Text>
      <TodoList todosData={todosData.filter(({ isToday }) => isToday)} />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.plus}> + </Text>
      </TouchableOpacity>
    </View>
  );
}

const iconsDefaultStyles = {
  width: 42,
  height: 42,
  borderRadius: 21
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 15
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  img: {
    ...iconsDefaultStyles,
    alignSelf: 'flex-end'
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 35,
    marginTop: 10,
  },
  todayContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  button: {
    ...iconsDefaultStyles,
    backgroundColor: '#000',
    position: 'absolute',
    bottom: 50,
    right: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: .5,
    shadowRadius: 5,
    elevation: 5
  },
  plus: {
    fontSize: 40,
    color: '#fff',
    position: 'absolute',
    top: -6,
    left: 1.5
  }
});


