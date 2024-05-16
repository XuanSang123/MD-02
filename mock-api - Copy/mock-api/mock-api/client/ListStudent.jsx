import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function ListStudent({ deleteStudent, listStudent }) {
  return (
    <>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>
              <span className="custom-checkbox">
                <input type="checkbox" id="selectAll" />
                <label htmlFor="selectAll"></label>
              </span>
            </th>
            <th>Tên sinh viên</th>
            <th>Email</th>
            <th>Địc chỉ</th>
            <th>Số điện thoại</th>
            <th>Lựa chọn</th>
          </tr>
        </thead>
        <tbody>
          {listStudent.map((student) => {
            console.log(student);
            return (
              <tr key={student.id}>
                <td>
                  <span className="custom-checkbox">
                    <input
                      type="checkbox"
                      id={`checkbox-${student.id}`}
                      name="options[]"
                      value="1"
                    />
                    <label htmlFor={`checkbox-${student.id}`}></label>
                  </span>
                </td>
                <td>{student.student_name}</td>
                <td>{student.email}</td>
                <td>{student.address}</td>
                <td>{student.phone}</td>
                <td>
                  <button>
                    <EditIcon />{" "}
                  </button>
                  <button onClick={() => deleteStudent(student.id)}>
                    <DeleteIcon />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
