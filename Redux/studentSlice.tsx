// studentSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  students: [
    { id: 1, name: "John", email: "john@example.com", phone: "123-456-7890" },
    { id: 2, name: "Alice", email: "alice@example.com", phone: "987-654-3210" },
    { id: 3, name: "Bob", email: "bob@example.com", phone: "555-555-5555" },
    { id: 4, name: "Bob", email: "bob@example.com", phone: "555-555-5555" }

  ],
};

const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {
        addStudent(state, action) {
      state.students.push(action.payload);
    },
    updateStudent(state, action) {
      const { id, newData } = action.payload;
      const studentIndex = state.students.findIndex(student => student.id === id);
      if (studentIndex !== -1) {
        state.students[studentIndex] = { ...state.students[studentIndex], ...newData };
      }
    },
    deleteStudent(state, action) {
      const studentId = action.payload;
      state.students = state.students.filter(student => student.id !== studentId);
    },
  },
});

export const { addStudent, updateStudent, deleteStudent } = studentSlice.actions;

export default studentSlice.reducer;
