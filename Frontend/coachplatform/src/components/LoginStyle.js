import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    container: {
        padding: theme.spacing(3,2),
        maxWidth: 550,
    },
    paper: {
        padding: theme.spacing(2),
    },
    button: {
        background: 'linear-gradient(45deg, #313896 30%, #9F32B2 60%, #00D7FF 80%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 50,
    },
    text: {
        padding: theme.spacing(2),
    }
}));

export { useStyles };