import React from 'react';
import { createBrowserHistory } from 'history';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
    root: {
      flexGrow: 1,
      marginBottom: "1em"
    }
  });


function Menu(props) {
    const history2 = createBrowserHistory();

    const classes = useStyles();

    const [value, setValue] = React.useState('/');

    const handleChange = (event, newValue) => {
    setValue(newValue);
    history2.push(newValue);
  };

    return(
        <Paper className={classes.root}>
            <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
            >
            <Tab label="Lista" value="/"  />
            <Tab label="Nuevo" value="/nuevo"  />
            </Tabs>
        </Paper>
    );
}

export default Menu;