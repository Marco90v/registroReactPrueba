import React from 'react';
import { connect } from "react-redux";


import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormGroup from '@material-ui/core/FormGroup';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    formControl: {
        width: "20em",
        marginBottom: '1em'
    },
    formGrup:{
        alignItems: "center"
    }
});

function Nuevo({history,agregarUsuario, usuarios}) {
    let state = {}

    const classes = useStyles();
    const onChange = (e) => { state[e.target.id]= e.target.value; }

    const agregarStorage = ()=>{
        usuarios.push(state); 
        localStorage.setItem('datos', JSON.stringify(usuarios));
    }

    return (
        <FormGroup row={false} className={classes.formGrup}>
            <FormControl fullWidth={false} className={classes.formControl} >
                <InputLabel htmlFor="name">Nombre</InputLabel>
                <Input id="name" onChange={onChange} />
            </FormControl>
            <FormControl fullWidth={false} className={classes.formControl}>
                <InputLabel htmlFor="lastName">Apellido</InputLabel>
                <Input id="lastName" onChange={onChange} />
            </FormControl >
            <FormControl fullWidth={false} className={classes.formControl}>
                <InputLabel htmlFor="email">Correo</InputLabel>
                <Input id="email" onChange={onChange} />
            </FormControl>
            <FormControl fullWidth={false} className={classes.formControl}>
                <InputLabel htmlFor="phone">Teléfono</InputLabel>
                <Input id="phone" onChange={onChange} />
            </FormControl>
            <FormControl fullWidth={false} className={classes.formControl}>
                <InputLabel htmlFor="birthday">Fecha de Nacimiento</InputLabel>
                <Input id="birthday" onChange={onChange} />
            </FormControl>
            <FormControl>
                <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    className={classes.button}
                    onClick={ ()=>{agregarUsuario(state); agregarStorage(); history.push('/');} }
                >
                    Agregar
                </Button>
            </FormControl>
        </FormGroup>
    );

}

const mapStateToProps = s =>({ usuarios: s.datos })

const mapDispatchToProps = dispatch => ({
    agregarUsuario(u){
        dispatch({
            type: "Agregar_Usuario",
            u
        });
    }
})

export default connect(mapStateToProps, mapDispatchToProps )(Nuevo)