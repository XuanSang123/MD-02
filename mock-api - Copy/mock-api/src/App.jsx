import axios from "axios";
import "./App.css";
import "./App1.css";
import { useState, useEffect } from "react";
import ListStudent from "../mock-api/client/ListStudent";
import StudentInformation from "./StudentInformation";

export default function App() {
  // console.log("AAA");
  const [listStudent, setListStudent] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/students")
      .then((res) => {
        setListStudent(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);
  // console.log(listStudent);

  const deleteStudent = (id) => {
    axios
      .delete("http://localhost:3000/students/" + id)
      .then((res) => {
        setListStudent(listStudent.filter((student) => student.id !== id));
      })
      .catch((err) => {
        err;
        console.log(err, "err");
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = {
      student_name: e.target[0].value,
      email: e.target[1].value,
      address: e.target[2].value,
      phone: e.target[3].value,
      status: false,
      create_at: new Date(),
    };
    axios
      .post(`http://localhost:3000/students/`, newStudent)
      .then((res) => {
        console.log(res, "res");
        setListStudent([...listStudent, res.data]);
      })
      .catch((err) => {
        err;
        console.log(err, "err");
      });
  };
  return (
    <>
      <ListStudent listStudent={listStudent} deleteStudent={deleteStudent} />
      <StudentInformation handleSubmit={handleSubmit} />
    </>
  );
}
