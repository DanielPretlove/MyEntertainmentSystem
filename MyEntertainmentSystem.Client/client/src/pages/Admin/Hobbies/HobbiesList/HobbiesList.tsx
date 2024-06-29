import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import { useHobbiesListAPI } from "../../../../context/Hobbies/List/HobbiesListContext";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import "./HobbiesList.less";
import HobbiesDisplay from "../HobbiesDisplay/HobbiesDisplay";
import { useMemo, useRef, useState } from "react";
import { useHobbiesAdminContext } from "../../../../context/Hobbies/Admin/HobbiesAdminContext";
import { IHobbies } from "../../../../interfaces/IHobbies";

export default function HobbiesList() {
  const hobbiesAPI = useHobbiesListAPI();
  const dialog = useHobbiesAdminContext();
  const hobbies = useMemo(() => hobbiesAPI.data, [hobbiesAPI.data]); 
  
  const hobby = useRef<IHobbies>({} as IHobbies);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);


  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  }

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  }
  console.log(hobbies);
  return (
    <>
      <Typography variant="h3" gutterBottom>
        Hobbies List Page
      </Typography>
      <Paper>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="caption table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Type</TableCell>
                <TableCell align="right">Completion State</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {hobbies.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item) => (
                <TableRow hover={true} key={item.name}>
                  <TableCell component="th" scope="row">
                    {item.name}
                  </TableCell>
                  {/* <TableCell align="right">{item}</TableCell> */}
                  <TableCell align="right">{item.completionState}</TableCell>
                  <TableCell align="right">
                    <VisibilityIcon
                      color="primary"
                      onClick={() => {
                        dialog.dispatch({ type: "view" });
                        hobby.current = item;
                      }}
                    ></VisibilityIcon>
                    <EditIcon color="primary" />
                    <DeleteIcon color="primary" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={hobbies.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

      {dialog.dialog && dialog.view ? <HobbiesDisplay hobby={hobby.current} /> : ""}
    </>
  );
}
