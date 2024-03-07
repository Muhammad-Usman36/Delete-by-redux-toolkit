// StudentList.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { deleteStudent } from './studentSlice';

const StudentList = () => {
  const students = useSelector(state => state.student.students);
  const dispatch = useDispatch();

  const handleDelete = studentId => {
    dispatch(deleteStudent(studentId));
  };

  return (
    <View>
      {students.map(student => (
        <View key={student.id}>
          <Text>Name: {student.name}</Text>
          <Text>Email: {student.email}</Text>
          <Text>Phone: {student.phone}</Text>
          <Button title="Delete" onPress={() => handleDelete(student.id)} />
        </View>
      ))}
    </View>
  );
};

export default StudentList;
