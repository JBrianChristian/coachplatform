import React from 'react';
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { Link } from "react-router-dom"
import { useStyles } from './LoginStyle.js'

const Login = (props) => {
    const classes = useStyles(props);

    return (
        <div>
            <Typography variant="h4" className={classes.text}>Sign in or <Link to="/register">Create an Account</Link></Typography>
        <Container className = { classes.container } maxWidth="xs">
        <Paper elevation = {10} className={classes.paper}>
            <form>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField required fullWidth label="Email" name="email" size="large" variant="outlined" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField required fullWidth label="Password" name="password" type="password" size="large" variant="outlined" />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Button className = {classes.button} fullWidth type="submit" variant="contained">
                            Login
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Paper>
        </Container>
    </div>
    );
    
};

export default Login;