import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteData, editData } from '../redux/dataSlice'
// import Editor from '../Modal/Editor'



type dataType = {
  key: number;
  id: string;
  title: string;
  state: string;
  url: string;
  created_at: string;
  updated_at: string;
};

type dataProps = {
  data: dataType;
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function TableItem(data: dataProps) {
  let newData = {...data.data};
  const dispatch = useDispatch()
  const [updatedData, setUpdatedData] = useState(newData);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleDelete = () =>  {
    dispatch(deleteData(data.data.key))
    console.log('excuted');
  }
  const handleEdit = () => {
    dispatch(editData(updatedData))
    console.log('edited');
  }
  
  useEffect(() => {
    console.log(updatedData);
    
  }, [updatedData])
  return (
    <>
      <TableRow
        key={data.data.key}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th" scope="data">
          {data.data.id}
        </TableCell>
        <TableCell align="right">{data.data.title}</TableCell>
        <TableCell align="right">{data.data.state}</TableCell>
        <TableCell align="right">{data.data.url}</TableCell>
        <TableCell align="right">{data.data.created_at}</TableCell>
        <TableCell align="right">{data.data.updated_at}</TableCell>
        <TableCell>
          <IconButton aria-label="edit" onClick={handleOpen}>
            <EditIcon sx={{ color: "#e91e63" }}></EditIcon>
          </IconButton>
          <IconButton aria-label="edit" onClick={handleDelete}>
            <DeleteIcon sx={{ color: "#e91e63" }}></DeleteIcon>
          </IconButton>
        </TableCell>
      </TableRow>
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
            onChange={(e) => setUpdatedData({...updatedData, id: e.target.value})
            }
          />
          <TextField
            required
            id="standard-basic"
            label="Title"
            variant="standard"
            defaultValue={data.data.title}
            sx={{ width: "100%" }}
            onChange={(e) => setUpdatedData({...updatedData, title: e.target.value})}
          />
          <TextField
            required
            id="standard-basic"
            label="State"
            variant="standard"
            defaultValue={data.data.state}
            sx={{ width: "100%" }}
            onChange={(e) => setUpdatedData({...updatedData, state: e.target.value})}
          />
          <TextField
            id="standard-basic"
            label="Url"
            variant="standard"
            defaultValue={data.data.url}
            sx={{ width: "100%" }}
            onChange={(e) => setUpdatedData({...updatedData, url: e.target.value})}
          />
          <TextField
            id="standard-basic"
            label="Created at"
            variant="standard"
            defaultValue={data.data.created_at}
            sx={{ width: "100%" }}
            onChange={(e) => setUpdatedData({...updatedData, created_at: e.target.value})}
          />
          <TextField
            id="standard-basic"
            label="Updatad at"
            variant="standard"
            defaultValue={data.data.updated_at}
            sx={{ width: "100%" }}
            onChange={(e) => setUpdatedData({...updatedData, updated_at: e.target.value})}
          />
          <Stack spacing={2} direction="row">
            <Button variant="text" sx={{color: 'inherit'}} onClick={() => {handleEdit(); handleClose()}}>Save</Button>
            <Button variant="text" sx={{color: 'inherit'}} onClick={handleClose}>Cancel</Button>
          </Stack>
        </Box>
      </Modal>
      {/* <Editor data={data}/> */}
    </>
  );
}
