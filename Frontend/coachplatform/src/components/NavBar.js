import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import { Link } from "react-router-dom"
import { useStyles } from './NavBarStyles.js'


const NavBar = (props) => {
    const classes = useStyles(props);
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
