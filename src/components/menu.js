import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginBottom: "1em"
  }
});

function Menu() {
  const location = useLocation();
  const classes = useStyles();
  const [value, setValue] = React.useState(location.pathname);
  const handleChange = (event, newValue) => { setValue(newValue); };

  return(
      <Paper className={classes.root}>
          <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered>
          <Tab label="Lista" value="/" component={Link} to="/" />
          <Tab label="Nuevo" value="/nuevo" component={Link} to="/nuevo" />
          </Tabs>
      </Paper>
  );
}

export default Menu;