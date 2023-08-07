import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import MuiLinks from "./MuiLinks";
import ListItem from "@material-ui/core/ListItem";
import Routes from "./Routes";

const drawerWidth = 240;

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <>
          <ListItem button component={Link} to="/">
            &nbsp;&nbsp;Home
          </ListItem>
          <MuiLinks />
        </>
      </Drawer>
      <main className={classes.content}>
        <Routes />
      </main>
    </div>
  );
};

export default App;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex",
    height: "100%"
  },
  drawerPaper: {
    position: "relative",
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    backgroundColor: "#fff",
    padding: 24,
    minWidth: 0,
    overflowY: "auto"
  },
  toolbar: theme.mixins.toolbar
}));