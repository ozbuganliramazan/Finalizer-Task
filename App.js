import { StyleSheet, Text, Image } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/page/HomeScreen";
import SettingsScreen from "./src/page/SettingsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "./src/page/ProfileScreen";
import CustomScreen from "./src/page/CustomScreen";
import { AntDesign } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AboutScreen from "./src/page/AboutScreen";

const Stack = createNativeStackNavigator();

const CustomDrawerContents = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          title: false,
        }}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ headerShown: false, title: false }}
      />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#ffffff",
          borderTopColor: "transparent",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <Feather name="command" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="CustomDrawerContents"
        component={CustomDrawerContents}
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="import-contacts" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <AntDesign name="message1" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="inbox" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Custom"
        component={CustomScreen}
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <Feather name="command" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const Drawer = createDrawerNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Home"
          component={MainTab}
          options={{
            headerTitle: (props) => (
              <Image
                source={require("./assets/logo-color.png")}
                style={{ width: 150, height: 40 }}
                resizeMode="contain"
              />
            ),
            headerRight: (props) => (
              <Image
                source={require("./assets/your_image.jpg")}
                style={{ width: 50, height: 50, borderRadius: 50 }}
                resizeMode="contain"
              />
            ),
            headerTitleAlign: "center",
          }}
        />
        <Drawer.Screen
          name="About"
          component={AboutScreen}
          options={{
            headerTitle: (props) => (
              <Image
                source={require("./assets/logo-color.png")}
                style={{ width: 150, height: 40 }}
                resizeMode="contain"
              />
            ),
            headerRight: (props) => (
              <Image
                source={require("./assets/your_image.jpg")}
                style={{ width: 50, height: 50 }}
                resizeMode="contain"
              />
            ),
            headerTitleAlign: "center",
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
