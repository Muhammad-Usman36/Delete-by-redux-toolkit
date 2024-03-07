// StudentForm.js
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { addStudent, updateStudent } from './studentSlice';

const StudentForm = ({student}) => {
  const [name, setName] = useState(student ? student.name : '');
  const [email, setEmail] = useState(student ? student.email : '');
  const [phone, setPhone] = useState(student ? student.phone : '');

  const dispatch = useDispatch();

  const handleSubmit = () => {
    const newData = { name, email, phone };
    if (student) {
      dispatch(updateStudent({ id: student.id, newData }));
    } else {
      dispatch(addStudent({ id: Date.now(), ...newData }));
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Phone"
        value={phone}
        keyboardType='numeric'
        onChangeText={setPhone}
      />
      <Button title={student ? "Update" : "Add"} onPress={handleSubmit} />
    </View>
  );
};

export default StudentForm;
