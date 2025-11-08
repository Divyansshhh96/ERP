import React, { useState } from "react";
import Header from "./components/Header";
import StudentCard from "./components/StudentCard";
import AddStudentForm from "./components/AddStudentForm";

const App = () => {
  const [students, setStudents] = useState([
    { name: "Divyansh Pal", roll: "25", course: "CSE" },
    { name: "Anjali Sharma", roll: "18", course: "ECE" },
  ]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  return (
    <div>
      <Header />
      <div className="max-w-xl mx-auto mt-6">
        <AddStudentForm onAddStudent={addStudent} />
        <h2 className="text-xl font-bold mb-4">Students List</h2>
        {students.map((stu, index) => (
          <StudentCard key={index} student={stu} />
        ))}
      </div>
    </div>
  );
};

export default App;
