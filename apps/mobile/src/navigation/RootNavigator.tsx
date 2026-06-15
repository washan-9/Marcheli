import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AuthScreen } from "../views/AuthScreen";
import { MoodScreen } from "../views/MoodScreen";
import { ChatScreen } from "../views/ChatScreen";
import { AppointmentsScreen } from "../views/AppointmentsScreen";
import { ResourcesScreen } from "../views/ResourcesScreen";

export type RootStackParamList = {
  Auth: undefined;
  Mood: undefined;
  Chat: undefined;
  Appointments: undefined;
  Resources: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

// Stack con las 5 pantallas del spec. La navegación post-login (tabs) se
// definirá en la fase de implementación.
export function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth">
        <Stack.Screen name="Auth" component={AuthScreen} options={{ title: "Ingreso" }} />
        <Stack.Screen name="Mood" component={MoodScreen} options={{ title: "Mi Ánimo" }} />
        <Stack.Screen name="Chat" component={ChatScreen} options={{ title: "MindCare" }} />
        <Stack.Screen name="Appointments" component={AppointmentsScreen} options={{ title: "Mis Citas" }} />
        <Stack.Screen name="Resources" component={ResourcesScreen} options={{ title: "Recursos" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
