import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddToDo from "./screens/AddToDo";
import Home from "./screens/Home";
import { store } from './redux/store';
import { Provider } from 'react-redux';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="Add" component={AddToDo} options={{
            // headerShown: false,
            presentation: 'modal'
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

