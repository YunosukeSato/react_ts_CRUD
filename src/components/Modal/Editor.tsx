import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

type style = {
  position: "absolute";
  top: string;
  left: string;
  transform: string;
  width: number;
  bgcolor: string;
  border: string;
  boxShadow: number;
  p: number;
};

type setUpdateData = React.Dispatch<
  React.SetStateAction<{
    key: number;
    id: number;
    title: string;
    state: string;
    url: string;
    created_at: string;
    updated_at: string;
  }>
>;

type dataType = {
  key: number;
  id: number;
  title: string;
  state: string;
  url: string;
  created_at: string;
  updated_at: string;
};

type dataProps = {
  data: dataType;
};

function Editor(
  data: dataProps,
  open: boolean,
  style: style,
  handleClose: () => void,
  handleEdit: () => void,
  updatedData: dataType,
  setUpdatedData: setUpdateData,
) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Issue id: {data.data.id}
        </Typography>
        <TextField
          required
          id="standard-basic"
          label="Id"
          variant="standard"
          defaultValue={data.data.id}
          sx={{ width: "100%" }}
          onChange={(e) =>
            setUpdatedData({ ...updatedData, id: Number(e.target.value) })
          }
        />
        <TextField
          required
          id="standard-basic"
          label="Title"
          variant="standard"
          defaultValue={data.data.title}
          sx={{ width: "100%" }}
          onChange={(e) =>
            setUpdatedData({ ...updatedData, title: e.target.value })
          }
        />
        <TextField
          required
          id="standard-basic"
          label="State"
          variant="standard"
          defaultValue={data.data.state}
          sx={{ width: "100%" }}
          onChange={(e) =>
            setUpdatedData({ ...updatedData, state: e.target.value })
          }
        />
        <TextField
          id="standard-basic"
          label="Url"
          variant="standard"
          defaultValue={data.data.url}
          sx={{ width: "100%" }}
          onChange={(e) =>
            setUpdatedData({ ...updatedData, url: e.target.value })
          }
        />
        <TextField
          id="standard-basic"
          label="Created at"
          variant="standard"
          defaultValue={data.data.created_at}
          sx={{ width: "100%" }}
          onChange={(e) =>
            setUpdatedData({ ...updatedData, created_at: e.target.value })
          }
        />
        <TextField
          id="standard-basic"
          label="Updatad at"
          variant="standard"
          defaultValue={data.data.updated_at}
          sx={{ width: "100%" }}
          onChange={(e) =>
            setUpdatedData({ ...updatedData, updated_at: e.target.value })
          }
        />
        <Stack spacing={2} direction="row">
          <Button
            variant="text"
            sx={{ color: "inherit" }}
            onClick={() => {
              handleEdit();
              handleClose();
            }}
          >
            Save
          </Button>
          <Button
            variant="text"
            sx={{ color: "inherit" }}
            onClick={handleClose}
          >
            Cancel
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
}

export default Editor;
