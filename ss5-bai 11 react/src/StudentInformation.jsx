export default function StudentInformation({ handleSubmit }) {
  return (
    <div>
      <h2>Thông Tin Sinh Viên</h2>
      <form className="studentinfor_form" onSubmit={handleSubmit}>
        <div className="studentinfor_form--input">
          <label>Mã sinh viên</label>
          <input type="text" disabled />
        </div>
        <div className="studentinfor_form--input">
          <label>Tên sinh viên</label>
          <input type="text" />
        </div>
        <div className="studentinfor_form--input">
          <label>Tuổi</label>
          <input type="text" />
        </div>
        <div className="studentinfor_form--input">
          <label>Giới Tính</label>
          <input type="text" />
        </div>
        <div className="studentinfor_form--input">
          <label>Ngày sinh</label>
          <input type="text" />
        </div>
        <div className="studentinfor_form--input">
          <label>Nơi sinh</label>
          <input type="text" />
        </div>
        <div className="studentinfor_form--input">
          <label>Địa chỉ</label>
          <input type="text" />
        </div>
        <button type="submit" className="studentinfor_form--btn--add">
          ADD
        </button>
      </form>
    </div>
  );
}
