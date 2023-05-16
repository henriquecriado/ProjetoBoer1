import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons/";
import Icon from "react-native-vector-icons/FontAwesome5";
import GerenciarProdutos from "../../components/Produtos/gerenciarproduto";

//import LinearGradient from 'react-native-linear-gradient';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text></Text>
    </View>
  );
}

function ListScreen() {
  return (
    <View style={styles.container}>
      <Text></Text>
    </View>
  );
}

function ProdutosScreen() {
  return <GerenciarProdutos />;
}

function NotificationsScreen() {
  return (
    <View style={styles.container}>
      <Text></Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function MenuTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: "#e91e63",
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",

            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name="List"
          component={ListScreen}
          options={{
            tabBarLabel: "Listar Produtos",

            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="list" color={color} size={size} />
            ),

            tabBarBadge: 3,
          }}
        />

        <Tab.Screen
          name="Produtos"
          component={ProdutosScreen}
          options={{
            tabBarLabel: "Produtos",

            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="save" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    margin: 10,
  },

  input: {
    borderWidth: 1,

    borderColor: "#121212",

    height: 40,

    fontSize: 13,

    borderRadius: 8,
  },

  separator: {
    marginVertical: 5,
  },

  button: {
    flexDirection: "row",

    alignItems: "center",

    backgroundColor: "#3ea6f2",

    borderWidth: 0.5,

    borderColor: "#fff",

    height: 40,

    borderRadius: 5,

    margin: 5,
  },

  buttonImageIconStyle: {
    padding: 10,

    margin: 5,

    height: 25,

    width: 25,

    resizeMode: "stretch",
  },

  buttonTextStyle: {
    color: "#fff",

    marginBottom: 4,

    marginLeft: 100,

    fontSize: 20,
  },

  buttonIconSeparatorStyle: {
    backgroundColor: "#fff",

    width: 1,

    height: 20,
  },

  listar: {
    fontSize: 20,

    textAlign: "center",
  },
});
