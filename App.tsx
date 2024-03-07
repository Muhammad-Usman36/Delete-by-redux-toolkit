// src/App.js
import React from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './Redux/store';
import StudentList from './Redux/StudentList';
const App = () => {
  return (
      <Provider store={store}>
      <StudentList />
    </Provider>
  );
};
export default App;
