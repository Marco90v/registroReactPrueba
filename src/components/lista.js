import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles({
    table: { minWidth: 650 },
    root: { flexGrow: 1, marginBottom: "1em" }
});

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    }
}))(TableCell);
  
function createData(ID, name, lastName, email, phone, birthdate) {
    return { ID, name, lastName, email, phone, birthdate };
}
  
const rows = [
    createData(1,'Marco','Velasquez', 'correo@correo.com', '123.123.123', '01/01/2000'),
    createData(2,'Marco','Velasquez', 'correo@correo.com', '123.123.123', '01/01/2000'),
    createData(3,'Marco','Velasquez', 'correo@correo.com', '123.123.123', '01/01/2000'),
    createData(4,'Marco','Velasquez', 'correo@correo.com', '123.123.123', '01/01/2000')
];


function Lista() {
    const classes = useStyles();

    return(
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">ID</StyledTableCell>
                        <StyledTableCell align="center">Nombre</StyledTableCell>
                        <StyledTableCell align="center">Apellido</StyledTableCell>
                        <StyledTableCell align="center">Correo</StyledTableCell>
                        <StyledTableCell align="center">Teléfono</StyledTableCell>
                        <StyledTableCell align="center">Fecha de Nacimiento</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow key={row.ID}>
                        <TableCell align="center">{row.ID}</TableCell>
                        <TableCell align="center">{row.name}</TableCell>
                        <TableCell align="center">{row.lastName}</TableCell>
                        <TableCell align="center">{row.email}</TableCell>
                        <TableCell align="center">{row.phone}</TableCell>
                        <TableCell align="center">{row.birthdate}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default Lista;