import React from "react";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationTheme } from "ui/themes/app-theme";
import Index from "pages";
import SearchItem from "pages/searchItem";
import ItemDetail from "pages/itemDetail";
import Logo from "@assets/logoMDias.png";

const Stack = createStackNavigator();

export type RootStackParamList = {
  SearchItem: undefined;
  ItemDetail: { itemId: number };
  Index: {};
};

const Router: React.FC = () => {
  return (
    <NavigationContainer theme={NavigationTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name={"SearchItem"}
          component={SearchItem}
          options={{
            headerTitleAlign: "center",
            headerTitle: () => (
              <Image
                style={{
                  width: 150,
                  height: 40,
                  resizeMode: "cover",
                }}
                source={Logo}
              ></Image>
            ),
            headerStyle: {
              backgroundColor: "#01236A",
            },
          }}
        />
        <Stack.Screen
          name={"ItemDetail"}
          component={ItemDetail}
          options={{
            headerTitleAlign: "center",
            headerTitle: () => (
              <Image
                style={{
                  width: 150,
                  height: 40,
                  resizeMode: "cover",
                }}
                source={Logo}
              ></Image>
            ),
            headerStyle: {
              backgroundColor: "#01236A",
            },
          }}
        />
        <Stack.Screen name={"Index"} component={Index}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
