import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import { useStyles } from './FooterStyles.js'

const Footer = (props) => {
    const classes = useStyles(props);
    return(
        <div>
            <AppBar position="static" className={classes.footer}>
                <p className={classes.copy}>Big Snacker eats butt (not well tho) | Copyright &copy; Platform 2021</p>
            </AppBar>
        </div>
    )
}

export default Footer;