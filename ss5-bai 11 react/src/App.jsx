import { useState } from "react";
import "./App.css";
import ListStudent from "./ListStudent";
import StudentInformation from "./StudentInformation";
import StudentEdit from "./StudentEdit";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [listStudent, setListStudent] = useState(
    JSON.parse(localStorage.getItem("listStudent")) || []
  );
  const handleShowForm = () => {
    setShowForm(true);
    setShowFormEdit(false);
  };

  const handleShowInfo = (student) => {
    // show student information:
    alert(`
    Tên Sinh Viên: ${student.studentName}
    Tuổi: ${student.studentAge} 
    Mã Sinh Viên: ${student.studentId}
    Giới Tính: ${student.studentGender}
    `);
  };
  const deleteStudent = (student) => {
    const listStudentSort = JSON.parse(localStorage.getItem("listStudent"));
    alert(`Đã xóa sinh viên: < ${student.studentName}> ra khỏi danh sách?`);
    const indexStudent = listStudentSort.findIndex(
      (item) => item.studentId == student.studentId
    );
    listStudentSort.splice(indexStudent, 1);
    setListStudent([...listStudentSort]);
    localStorage.setItem("listStudent", JSON.stringify(listStudentSort));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const newStudent = {
      studentId: Math.floor(Math.random() * 1000),
      studentName: event.target[1].value,
      studentAge: event.target[2].value,
      studentGender: event.target[3].value,
      studentDate: event.target[4].value,
      studentLocation: event.target[5].value,
    };
    setListStudent([...listStudent, newStudent]);
    localStorage.setItem(
      "listStudent",
      JSON.stringify([...listStudent, newStudent])
    );
    alert("Add student successfully!");
    setShowForm(!showForm);
    event.target.reset();
  };

  const [showFormEdit, setShowFormEdit] = useState(false);

  const editStudent = (student) => {
    setShowForm(false);
    setShowFormEdit(true);
    setShowFormEdit(!showFormEdit);
    localStorage.setItem("editStudent", JSON.stringify(student));
  };
  const studentInput = JSON.parse(localStorage.getItem("editStudent"));
  const handleEdit = (event) => {
    event.preventDefault();
    const listStudentSort = JSON.parse(localStorage.getItem("listStudent"));
    const indexStudent = listStudentSort.findIndex(
      (student) => student.studentId == studentInput.studentId
    );
    listStudentSort[indexStudent].studentId = studentInput.studentId;
    listStudentSort[indexStudent].studentName = event.target[1].value;
    listStudentSort[indexStudent].studentAge = event.target[2].value;
    listStudentSort[indexStudent].studentGender = event.target[3].value;
    listStudentSort[indexStudent].studentDate = event.target[4].value;
    listStudentSort[indexStudent].studentLocation = event.target[5].value;
    listStudentSort[indexStudent].studentLocation = event.target[6].value;
    setListStudent([...listStudentSort]);
    localStorage.setItem("listStudent", JSON.stringify([...listStudentSort]));
    setShowFormEdit(!setShowFormEdit);
  };
  const [isCheck, setIsCheck] = useState(false);
  const sortStudent = () => {
    setIsCheck(!isCheck);
    if (!isCheck) {
      listStudent.sort((a, b) => {
        if (a.studentName < b.studentName) return -1; // `a` đứng trước `b`
        if (a.studentName > b.studentName) return 1; // // `a` đứng sau `b`
        return 0; // Hai chuỗi bằng nhau
      });
      setListStudent([...listStudent]);
    } else {
      const studentsSortBegin = JSON.parse(localStorage.getItem("listStudent"));
      setListStudent([...studentsSortBegin]);
    }
  };
  const handleSearch = (event) => {
    event.preventDefault();
    if (event.target[0].value == "") {
      const studentFilterBegin = JSON.parse(
        localStorage.getItem("listStudent")
      );
      setListStudent([...studentFilterBegin]);
    } else {
      const searchStudent = listStudent.filter((student) =>
        student.studentName
          .toLowerCase()
          .includes(event.target[0].value.toLowerCase())
      );
      setListStudent([...searchStudent]);
    }
    // const indexSearch = listStudent.findIndex(
    //   (student) => student.studentName == event.target[0].value
    // );
    // console.log(indexSearch);
    // if (indexSearch == -1) {
    //   alert(
    //     `Sinh Viên: < ${event.target[0].value} > Không có trong danh sách!`
    //   );
    // } else {
    //   setListStudent([listStudent[indexSearch]]);
    // }
  };

  return (
    <>
      <ListStudent
        sortStudent={sortStudent}
        handleSearch={handleSearch}
        listStudent={listStudent}
        onClick={handleShowForm}
        showInfo={handleShowInfo}
        deleteStudent={deleteStudent}
        editStudent={editStudent}
      />
      {showForm && <StudentInformation handleSubmit={handleSubmit} />}
      {showFormEdit && (
        <StudentEdit handleEdit={handleEdit} studentInput={studentInput} />
      )}
    </>
  );
}

export default App;
