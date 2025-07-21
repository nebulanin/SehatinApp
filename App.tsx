import React from 'react';
import AppNavigator from './src/navigation/TabNavigator';
export type RootStackParamList = {
  Home: undefined;
  MenuList: undefined;
  RecipeDetail: { id: number };
};

export default function App() {
  return <AppNavigator />;
}
