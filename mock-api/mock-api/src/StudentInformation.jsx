import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function StudentInformation({ handleSubmit }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div>
              <h2>Thông Tin Sinh Viên</h2>
              <form className="studentinfor_form" onSubmit={handleSubmit}>
                <div className="studentinfor_form--input">
                  <label>Tên Sinh Viên</label>
                  <input type="text" />
                </div>
                <div className="studentinfor_form--input">
                  <label>Email</label>
                  <input type="text" />
                </div>

                <div className="studentinfor_form--input">
                  <label>Địa chỉ</label>
                  <input type="text" />
                </div>
                <div className="studentinfor_form--input">
                  <label>Số điện thoại</label>
                  <input type="text" />
                </div>
                <button type="submit" className="studentinfor_form--btn--add">
                  ADD
                </button>
              </form>
            </div>
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
