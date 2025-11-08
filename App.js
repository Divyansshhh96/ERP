import React, { useState } from "react";
import Header from "./components/Header";
import StudentCard from "./components/StudentCard";
import AddStudentForm from "./components/AddStudentForm";

function App() {
  const [students, setStudents] = useState([
    { name: "Divyansh Kumar", roll: "25", course: "CSE" },
    { name: "Anjali Sharma", roll: "18", course: "ECE" },
  ]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  return (
    <div>
      <Header />
      <div style={{ width: "400px", margin: "20px auto" }}>
        <AddStudentForm onAddStudent={addStudent} />
        <h2>Students List</h2>
        {students.map((stu, index) => (
          <StudentCard key={index} student={stu} />
        ))}
      </div>
    </div>
  );
}

export default App;
