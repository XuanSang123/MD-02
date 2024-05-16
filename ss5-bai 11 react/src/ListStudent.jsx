import PropTypes from "prop-types";

export default function ListStudent({
  handleSearch,
  sortStudent,
  listStudent,
  onClick,
  showInfo,
  deleteStudent,
  editStudent,
}) {
  return (
    <>
      {" "}
      <div>
        {" "}
        <div className="list">
          <button className="list_btn--themmoi" onClick={onClick}>
            Thêm mới sinh viên
          </button>
          <form onSubmit={handleSearch}>
            <input
              className="list_input--themmoi"
              type="text"
              placeholder="Nhập tên sinh viên"
            />
            <button type="submit" className="list_btn--timkiem">
              Tìm kiếm
            </button>
          </form>
          <button onClick={() => sortStudent()} className="list_btn--sapxep">
            Sắp xếp
          </button>
        </div>
        <h2>Danh Sách Sinh Viên</h2>
        <table>
          <tr>
            <th>#</th>
            <th>Mã sinh viên</th>
            <th>Tên sinh viên</th>
            <th>Tuổi</th>
            <th>Giới tính</th>
            <th>Hành động</th>
          </tr>
          {listStudent.map((student, index) => (
            <tr key={student.studentId}>
              <td>{index + 1}</td>
              <td>{student.studentId}</td>
              <td>{student.studentName}</td>
              <td>{student.studentAge}</td>
              <td>{student.studentGender}</td>
              <td>
                <button
                  className="list_table--btn--xem"
                  onClick={() => showInfo(student)}
                >
                  Xem
                </button>
                <button
                  className="list_table--btn--sua"
                  onClick={() => editStudent(student)}
                >
                  Sửa
                </button>
                <button
                  className="list_table--btn--xoa"
                  onClick={() => deleteStudent(student)}
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
}

ListStudent.propTypes = {
  listStudent: PropTypes.array,
  onClick: PropTypes.func,
  showInfo: PropTypes.func,
  deleteStudent: PropTypes.func,
  editStudent: PropTypes.func,
  handleSearch: PropTypes.func,
  sortStudent: PropTypes.func,
};
