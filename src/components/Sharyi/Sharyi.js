import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  Button,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  TableHead,
  Table,
  Paper,
} from "@mui/material";
const Sharyi = () => {
  const [person, setPerson] = useState([]);
  //   const navigate=useNavigate();
  //  const redirect =()=>{
  //     navigate('/Sharyi/edit/:id')
  //  }
  const calling = () => {
    axios
      .get(`https://usman-recipes.herokuapp.com/api/products`)
      .then((res) => {
        setPerson(res.data);
      });
  };
  calling();
  return (
    <div style={{ marginTop: "80px" }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell align="right">Color</TableCell>
              <TableCell align="right">Department</TableCell>
              <TableCell align="right">Editing</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {person.map((person) => (
              <TableRow
                key={person.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="person">
                  {person.name}
                </TableCell>
                <TableCell align="right">{person.color}</TableCell>
                <TableCell align="right">{person.department}</TableCell>
                <TableCell align="right">{person.protein}</TableCell>
                <Link
                  align="left"
                  variant="text"
                  to={"/Sharyi/edit/" + person._id}
                >
                  Edit
                </Link>
                <Link
                  align="left"
                  variant="text"
                  to={"/Sharyi/edit/" + person._id}
                >
                  Delete
                </Link>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default Sharyi;
