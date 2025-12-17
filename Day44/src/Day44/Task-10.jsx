import React from "react";

function AttendanceList() {
  const students = [
    { id: 1, name: "Alice", isPresent: true },
    { id: 2, name: "Bob", isPresent: false },
    { id: 3, name: "Charlie", isPresent: true },
  ];

  return (
    <div>
      <h2>Student Attendance</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name} -{" "}
            <span
              style={{
                color: student.isPresent ? "green" : "red",
                fontWeight: "bold",
              }}
            >
              {student.isPresent ? "Present" : "Absent"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AttendanceList;