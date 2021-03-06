import React from "react";
import {withRouter} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import {AppBar, IconButton, Toolbar, Typography} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import LocalLaundryIcon from "@material-ui/icons/LocalLaundryService";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Brightness3Icon from "@material-ui/icons/Brightness3";

import KebabMenu from "./KebabMenu";

const useStyles = makeStyles((theme) => ({
    toolbar: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        paddingLeft: theme.spacing(1),
    },
}));

/**
 * Navigation bar of the app
 * @param {props} props
 */
function Header(props) {
    const classes = useStyles();

    const [menuAnchor, setMenuAnchor] = React.useState(null);


    return (
        <AppBar position="sticky">
            <KebabMenu
                open={Boolean(menuAnchor)}
                anchor={menuAnchor}
                onClose={() => setMenuAnchor(null)}
            />
            <Toolbar className={classes.toolbar}>
                <LocalLaundryIcon
                    fontSize="large"
                    onClick={() => props.history.push("/mainMenu")}
                />

                <Typography
                    className={classes.title}
                    variant="h5"
                    color="inherit"
                >
                    LaundryWise
                </Typography>
                <IconButton
                    onClick={(event) => setMenuAnchor(event.currentTarget)}
                    color="inherit"
                >
                    <MenuIcon/>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default withRouter(Header);
