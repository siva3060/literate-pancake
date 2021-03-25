
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('EK450', "Emirates", "5:40 am", "1:25 pm", 450),
  createData('AE676', "American Eagle", "5:46 am", "1:25 pm", 450),
  createData('KL322', "KLM", "5:40 am", "1:25 pm", 450),
  createData('KF098', "King Fisher", "5:40 am", "1:25 pm", 450),
  createData('SA450', "Singapor Airlanes", "5:40 am", "1:25 pm", 450),
  createData('BK234', "Beigin Sky", "5:40 am", "1:25 pm", 450)
];

export default function FlightTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Flight Name</TableCell>
            <TableCell align="right">Carrier</TableCell>
            <TableCell align="right">Arrival Time</TableCell>
            <TableCell align="right">Depature Time</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

