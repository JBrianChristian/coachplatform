import React from 'react';
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { Link } from "react-router-dom"
import { useStyles } from './RegisterStyle.js'
import Radio from '@material-ui/core/Radio'
import RadioGroup from'@material-ui/core/RadioGroup'
import FormLabel from '@material-ui/core/FormLabel'
import FormControlLabel from '@material-ui/core/FormControlLabel'

const Register = (props) => {
    const classes = useStyles(props);

    const [value, setValue] = React.useState('coach');
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div>
            <Typography variant="h4" className={classes.text}>Create a New Account</Typography>
            <Typography variant="h5" className={classes.loginText}>Already have an account? <Link to="/login">Login</Link></Typography>

        <Container className = { classes.container } maxWidth="xs">
        <Paper elevation = {10} className={classes.paper}>
            <form>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <TextField required fullWidth label="First Name" name="fName" size="large" variant="outlined" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField required fullWidth label="Last Name" name="lName" size="large" variant="outlined" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField required fullWidth label="Email" name="email" size="large" variant="outlined" />
                            </Grid>
                            <Grid item xs={12}>
                                <FormLabel fullWidth component="userTypeLabel">User Type</FormLabel>
                                <RadioGroup className={classes.radioGroup} row fullWidth aria-label="userType" name="type" value={value} onChange={handleChange}>
                                    <FormControlLabel value="coach" control={<Radio />} label="Coach" />
                                    <FormControlLabel value="player" control={<Radio />} label="Player" />
                                </RadioGroup>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField required fullWidth label="Password" name="password" type="password" size="large" variant="outlined" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField required fullWidth label="Confirm Password" name="confirmPassword" type="password" size="large" variant="outlined" />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Button className = {classes.button} fullWidth type="submit" variant="contained">
                            Register
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Paper>
        </Container>
    </div>
    );
}

export default Register;