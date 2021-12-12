import React from "react";
import AppTheme from "./app-theme";
import { Provider as PaperProvider } from "react-native-paper";
import { ThemeProvider as EmotionProvider } from "@emotion/react";
import { baseProps } from "react-native-gesture-handler/lib/typescript/handlers/gestureHandlers";

const ThemeProvider: React.FC = ({ children }) => {
  return (
    <EmotionProvider theme={AppTheme}>
      <PaperProvider theme={AppTheme}>{children}</PaperProvider>
    </EmotionProvider>
  );
};

export default ThemeProvider;
