import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import Buttons from "./Button";
import {styled} from "@mui/styles";

const Modal = styled(Dialog)`
height: 363px;
width: 40%;
border-radius: 20px;
text-align: center;
`

export default function ConfirmDialog(props) {
  const { confirmDialog, setConfirmDialog } = props;

  return (
      <Modal open={confirmDialog.isOpen}>
        <DialogTitle >
          <IconButton disableRipple >
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Typography variant="h6">
            {confirmDialog.title}
          </Typography>
        </DialogContent>
          <DialogContent>
              <Typography variant="h6">
              </Typography>
          </DialogContent>
        <DialogActions sx={{padding: 0, marginLeft: 0}} >
          <Buttons
              text="Нет"
              onClick={() => setConfirmDialog({ ...confirmDialog, isOpen: false })} />
          <Buttons
              text="Да"
              onClick={confirmDialog.onConfirm} />
        </DialogActions>
      </Modal>
  )
}
