
import { Navlink } from 'react-router-dom';

import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withRouter } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        [theme.breakpoints.down("xs")]: {
            flexGrow: 1,
        }
    },
    headerLinks: {
        display: "flex",
        flex: 1,
        justifyContent: "space-evenly"
    }
}));

const Navbar = props => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClick = (newRoute) => {
        setAnchorEl(null);

        props.history.push(newRoute);
    };

    const handleButtonClick = (newRoute) => {
        props.history.push(newRoute);
    }

    return (
        <div className={classes.root} >
            <AppBar position="static">
                <Toolbar>

                    <Typography variant="h6" className={classes.title}>
                        Capstone
                    </Typography>

                    {isMobile ? (<>
                        <IconButton edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="menu"
                            onClick={handleMenu}>
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={open}
                            onClose={() => setAnchorEl(null)}
                        >
                            <MenuItem onClick={() => handleMenuClick('/')} >About</MenuItem>
                            <MenuItem onClick={() => handleMenuClick('/issues')}>Issue Tracker</MenuItem>
                            <MenuItem onClick={() => handleMenuClick('/authentication')}>Authentication</MenuItem>
                        </Menu> </>) :
                        (
                            <div className={classes.headerLinks}>
                                <Button variant="contained" color="secondary" onClick={() => handleButtonClick('/')}   >About</Button>
                                <Button variant="contained" color="secondary" onClick={() => handleButtonClick('/issues')}  >Issue Tracker</Button>
                                <Button variant="contained" color="secondary" onClick={() => handleButtonClick('/authentication')}  >Authentication</Button>
                            </div>

                        )

                    }
                </Toolbar>
            </AppBar>
        </div >
    );
}

export default withRouter(Navbar);
