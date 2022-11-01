import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import { useAuth } from "../hooks/useAuth";
import { AppTabRoutes } from "./app.tab.routes";
import { AuthRoutes } from "./auth.routes";

export default function Routes() {
  const { user } = useAuth();
  return (
    <NavigationContainer>
      {user.id ? <AppTabRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
