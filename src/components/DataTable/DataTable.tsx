import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import "./DataTable.css";
import TableItem from "../TableItem/TableItem";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/rootReducer";
import { useEffect, useState } from "react";
import { addData } from "../redux/dataSlice";

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

export function DataTable() {
  const allData = useSelector((state: RootState) => state.dataSlice);
  const data = {
    key: 0,
    id: '',
    title: '',
    state: '',
    url: '',
    created_at: '',
    updated_at: '',
  };
  const [newData, setNewData] = useState(data)
  const [open, setOpen] = useState(false);
  const [isFilled, setIsFilled] = useState(true)
  const dispatch = useDispatch()

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleAdd = () => {
    dispatch(addData(newData))
    console.log('excuted');
    
  }

  useEffect(() => {
      if (!(newData.id === '' && newData.title === '' && newData.state === '')) {
        setIsFilled(false)
      }
  }, [newData])

  return (
    <>
      <TableContainer
        component={Paper}
        sx={{ display: { xs: "none", sm: "flex" }, tableLayout: "fixed" }}
      >
        <Table size="small" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="right">title</TableCell>
              <TableCell align="right">state</TableCell>
              <TableCell align="right">url</TableCell>
              <TableCell align="right">created_at</TableCell>
              <TableCell align="right">updated_at</TableCell>
              <TableCell>
                <IconButton color="inherit" aria-label="add" onClick={handleOpen}>
                  <AddIcon fontSize="medium"></AddIcon>
                </IconButton>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allData.map((data) => (
              <TableItem data={data} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add new Issue
          </Typography>
          <TextField
            required
            id="standard-basic"
            label="Id"
            variant="standard"
            sx={{ width: "100%" }}
            onChange={(e) =>
              setNewData({ ...newData, id: e.target.value })
            }
          />
          <TextField
            required
            id="standard-basic"
            label="Title"
            variant="standard"
            sx={{ width: "100%" }}
            onChange={(e) =>
              setNewData({ ...newData, title: e.target.value })
            }
          />
          <TextField
            required
            id="standard-basic"
            label="State"
            variant="standard"
            sx={{ width: "100%" }}
            onChange={(e) =>
              setNewData({ ...newData, state: e.target.value })
            }
          />
          <TextField
            id="standard-basic"
            label="Url"
            variant="standard"
            sx={{ width: "100%" }}
            onChange={(e) =>
              setNewData({ ...newData, url: e.target.value })
            }
          />
          <TextField
            id="standard-basic"
            label="Created at"
            variant="standard"
            sx={{ width: "100%" }}
            onChange={(e) =>
              setNewData({ ...newData, created_at: e.target.value })
            }
          />
          <TextField
            id="standard-basic"
            label="Updatad at"
            variant="standard"
            sx={{ width: "100%" }}
            onChange={(e) =>
              setNewData({ ...newData, updated_at: e.target.value })
            }
          />
          <Stack spacing={2} direction="row">
            <Button
              variant="text"
              sx={{ color: "inherit" }}
              onClick={() => {
                handleAdd();
                handleClose();
                console.log('clicked');
                
              }}
              disabled={isFilled}
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
    </>
  );
}

export default DataTable;
