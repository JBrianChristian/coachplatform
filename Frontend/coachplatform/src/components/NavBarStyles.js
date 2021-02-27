import { makeStyles } from '@material-ui/core/styles'

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

export { useStyles };