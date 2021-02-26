import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core/styles'
import { Link, Route, Switch } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
    bar: {
        background: 'linear-gradient(45deg, #313896 20%, #9F32B2 70%, #00D7FF 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
    },

    logo: {
        maxWidth: 120,
        marginRight: theme.spacing(2),
    },
    title: {
        marginRight: theme.spacing(2),
        width: '100%',
    },
    homeButton: {
        marginRight: theme.spacing(2),
        },
    loginButton: {
        marginRight: theme.spacing(2),
        },
    registerButton: {
        marginRight: theme.spacing(2),
        },
    aboutButton: {
        marginRight: theme.spacing(2),
        },
}));

const NavBar = () => {
    const classes = useStyles();
    return(
        <div>
            <AppBar position="static" className={classes.bar}>
                <Toolbar>

                    <img src = "https://image.freepik.com/free-vector/x-letter-stripe-sphere-ball-circle-corporate-generic-logo-template_8580-28.jpg" alt="logo" className={classes.logo}/> 

                    <Typography variant="h4" color="inherit" className={classes.title}>
                        Coach Platform
                    </Typography>

                    <Link to="/">
                    <IconButton color="inherit" aria-label="home" className={classes.homeButton}>
                        <Typography variant = "h5" color="inherit">Home</Typography>
                    </IconButton>
                    </Link>

                    <Link to="/about">
                    <IconButton color="inherit" aria-label="about" className={classes.aboutButton}>
                        <Typography variant = "h5" color="inherit">About</Typography>
                    </IconButton>
                    </Link>

                    <Link to="/login">
                    <IconButton start="end" color="inherit" aria-label="login" className={classes.loginButton}>
                        <Typography variant = "h5" color="inherit">Login</Typography>
                    </IconButton>
                    </Link>

                    <Link to="/register">
                    <IconButton color="inherit" aria-label="register" className={classes.registerButton}>
                        <Typography variant = "h5" color="inherit">Register</Typography>
                    </IconButton>
                    </Link>

                </Toolbar>
            </AppBar>

        </div>
    )
}

export default NavBar;
