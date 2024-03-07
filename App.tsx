// src/App.js
import React from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './Redux/store';
import StudentList from './Redux/StudentList';
import StudentForm from './Redux/StudentForm';

const App = () => {
  return (
      <Provider store={store}>
      <StudentList />
      <StudentForm/>
    </Provider>
  );
};
export default App;
