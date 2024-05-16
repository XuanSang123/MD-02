export default function StudentEdit({ handleEdit, studentInput }) {
  return (
    <div>
      <h2>Chỉnh Sửa Sinh Viên</h2>
      <form className="studentinfor_form" onSubmit={handleEdit}>
        <div className="studentinfor_form--input">
          <label>Mã sinh viên</label>
          <input type="text" disabled defaultValue={studentInput.studentId} />
        </div>
        <div className="studentinfor_form--input">
          <label>Tên sinh viên</label>
          <input type="text" defaultValue={studentInput.studentName} />
        </div>
        <div className="studentinfor_form--input">
          <label>Tuổi</label>
          <input type="text" defaultValue={studentInput.studentAge} />
        </div>
        <div className="studentinfor_form--input">
          <label>Giới Tính</label>
          <input type="text" defaultValue={studentInput.studentGender} />
        </div>
        <div className="studentinfor_form--input">
          <label>Ngày sinh</label>
          <input type="text" defaultValue={studentInput.studentDate} />
        </div>
        <div className="studentinfor_form--input">
          <label>Nơi sinh</label>
          <input type="text" defaultValue={studentInput.studentLocation} />
        </div>
        <div className="studentinfor_form--input">
          <label>Địa chỉ</label>
          <input type="text" defaultValue={studentInput.studentLocation} />
        </div>
        <button type="submit" className="studentinfor_form--btn--add">
          Chỉnh sửa
        </button>
      </form>
    </div>
  );
}
