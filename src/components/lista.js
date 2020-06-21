import React from 'react';
import { connect } from "react-redux";

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles({ table: { minWidth: 650 } });

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    }
}))(TableCell);

function Lista({usuarios}) {
    usuarios = usuarios === undefined || usuarios === null ? [] : usuarios;
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
                <TableBody >
                {
                    usuarios.length ?
                        usuarios.map((row, index) => (
                            <TableRow key={row.ID}>
                                <TableCell align="center">{row.ID}</TableCell>
                                <TableCell align="center">{row.name}</TableCell>
                                <TableCell align="center">{row.lastName}</TableCell>
                                <TableCell align="center">{row.email}</TableCell>
                                <TableCell align="center">{row.phone}</TableCell>
                                <TableCell align="center">{row.birthday}</TableCell>
                            </TableRow>
                        ))
                    : <TableRow><TableCell colSpan={6} align="center" >Sin registros</TableCell></TableRow>
                }
                </TableBody>
            </Table>
        </TableContainer>
    );
}

const mapStateToProps = state =>({ usuarios: state.datos })

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Lista)
